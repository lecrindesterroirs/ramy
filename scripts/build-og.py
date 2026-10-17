#!/usr/bin/env python3
"""Génère les images de partage (1200x630) depuis les photos du site.

Chaque page partage sa propre photo : on recadre, on pose un voile calibré sur
la luminosité du bas de l'image et le logotype L'Écrin Traiteur en bas à gauche.
Le logotype est rendu une fois par Chrome headless avec les vraies polices
(Baskerville Display PT + Neue Montreal), puis composé par Pillow.

    python3 scripts/build-og.py            # régénère ce qui manque
    python3 scripts/build-og.py --tout     # tout régénère
"""
import json, os, re, subprocess, sys, glob
from PIL import Image, ImageDraw, ImageFilter

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC = os.path.join(RACINE, 'public')
SORTIE = os.path.join(PUBLIC, 'og')
W, H = 1200, 630
CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

LOCKUP_HTML = """<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:'Baskerville Display PT';src:url('file://%(f)s/BaskervilleDisplayPT.woff2') format('woff2')}
@font-face{font-family:'Neue Montreal';src:url('file://%(f)s/PPNeueMontreal-Medium.woff2') format('woff2');font-weight:500}
html,body{margin:0;padding:0;background:transparent}
body{width:900px;height:320px;display:flex;align-items:center;justify-content:center}
.l{text-align:center;color:#fff}
.n{font-family:'Baskerville Display PT',Georgia,serif;font-size:108px;line-height:1;letter-spacing:.04em}
.s{font-family:'Neue Montreal',sans-serif;font-weight:500;font-size:30px;letter-spacing:.42em;margin-top:18px;padding-left:.42em}
</style></head><body><div class="l"><div class="n">L'ÉCRIN</div><div class="s">TRAITEUR</div></div></body></html>"""


def lockup(cache='/tmp/lecrin-og-lockup.png'):
    if not os.path.exists(cache):
        html = '/tmp/lecrin-og-lockup.html'
        open(html, 'w').write(LOCKUP_HTML % {'f': os.path.join(PUBLIC, 'fonts').replace(' ', '%20')})
        subprocess.run([CHROME, '--headless', '--disable-gpu', f'--screenshot={cache}',
                        '--window-size=900,320', '--default-background-color=00000000',
                        '--hide-scrollbars', '--force-device-scale-factor=2', html],
                       check=True, capture_output=True)
        im = Image.open(cache); im.crop(im.getchannel('A').getbbox()).save(cache)
    l = Image.open(cache).convert('RGBA')
    lw = 230
    l = l.resize((lw, round(lw * l.size[1] / l.size[0])), Image.LANCZOS)

    # Ombre portée douce : sur une photo très claire, la ligne « TRAITEUR »,
    # fine et blanche, disparaissait même avec le voile.
    marge = 14
    toile = Image.new('RGBA', (l.size[0] + marge * 2, l.size[1] + marge * 2), (0, 0, 0, 0))
    ombre = Image.new('RGBA', toile.size, (0, 0, 0, 0))
    ombre.paste((12, 10, 8, 190), (marge, marge + 2), l.getchannel('A'))
    ombre = ombre.filter(ImageFilter.GaussianBlur(7))
    toile = Image.alpha_composite(toile, ombre)
    toile = Image.alpha_composite(toile, ombre)   # deux passes : ombre plus dense
    toile.alpha_composite(l, (marge, marge))
    return toile


def _profils(im):
    """Énergie des contours par ligne et par colonne : où est le sujet."""
    import numpy as np
    g = im.convert('L').resize((240, 480), Image.BILINEAR)
    a = np.asarray(g, dtype=np.float32)
    e = np.zeros_like(a)
    e[:-1, :] += np.abs(np.diff(a, axis=0))
    e[:, :-1] += np.abs(np.diff(a, axis=1))
    return e.sum(axis=1), e.sum(axis=0)


def _fenetre(profil, taille):
    """Position de la fenêtre de `taille` qui capte le plus d'énergie."""
    import numpy as np
    n = len(profil)
    if taille >= n:
        return 0.0
    c = np.concatenate([[0.0], np.cumsum(profil)])
    scores = c[taille:] - c[:n - taille + 1]
    return float(np.argmax(scores)) / n


def _voile(im, lock):
    """Dégradé en bas, calibré sur la luminosité derrière le logotype."""
    z = im.convert('L').crop((40, H - 190, 40 + lock.size[0] + 40, H - 30))
    clair = sum(z.getdata()) / (z.size[0] * z.size[1])
    force = 120 if clair < 110 else (175 if clair < 160 else 215)
    v = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(v)
    for y in range(H):
        t = max(0.0, (y - H * 0.50) / (H * 0.50))
        d.line([(0, y), (W, y)], fill=(20, 17, 14, int(force * t * t)))
    return Image.alpha_composite(im, v)


# Au-delà de ce facteur d'agrandissement, l'image devient molle : on passe en
# mode panneau (photo nette au centre, fond flou tiré de la même photo).
AGRANDISSEMENT_MAX = 1.35
# Au-delà de cette part rognée, un recadrage plein cadre ampute trop le sujet.
PERTE_MAX = 0.42


def carte(src, dest, lock):
    im = Image.open(src).convert('RGB')
    w, h = im.size
    cible = W / H
    r = w / h
    perte = (1 - cible / r) if r > cible else (1 - r / cible)

    if r > cible:
        nw = round(h * cible)
        _, col = _profils(im)
        x = round(_fenetre(col, max(1, round(240 * nw / w))) * w)
        x = max(0, min(x, w - nw))
        decoupe = (x, 0, x + nw, h)
        agrandi = W / nw
    else:
        nh = round(w / cible)
        ligne, _ = _profils(im)
        y = round(_fenetre(ligne, max(1, round(480 * nh / h))) * h)
        y = max(0, min(y, h - nh))
        decoupe = (0, y, w, y + nh)
        agrandi = W / w

    # Rogner les côtés ampute un sujet qui s'étend d'un bord à l'autre
    # (un sandwich, une table dressée) : au-delà de 12 % de largeur perdue,
    # on garde la photo entière.
    perte_laterale = perte if r > cible else 0.0
    if agrandi <= AGRANDISSEMENT_MAX and perte <= PERTE_MAX and perte_laterale <= 0.12:
        plein = im.crop(decoupe).resize((W, H), Image.LANCZOS).convert('RGBA')
    else:
        # Panneau : la photo entière, nette, sur un fond flou tiré d'elle-même,
        # assombri et réchauffé pour que le logotype blanc reste lisible et que
        # le fond ne tire pas au gris sale.
        fond = im.resize((W, H), Image.LANCZOS).filter(ImageFilter.GaussianBlur(34))
        fond = Image.eval(fond, lambda v: int(v * 0.42))
        teinte = Image.new('RGB', (W, H), (34, 26, 18))
        fond = Image.blend(fond, teinte, 0.35).convert('RGBA')
        # La photo prend toute la place disponible, sans jamais être agrandie
        # au-delà de la limite : une photo panoramique (un sandwich pris de bout
        # en bout) doit occuper la largeur, pas se retrouver en timbre-poste.
        kx, ky = W * 0.94 / w, H * 0.88 / h
        k = min(kx, ky, AGRANDISSEMENT_MAX)
        wp, hp = max(1, round(w * k)), max(1, round(h * k))
        px, py = (W - wp) // 2, (H - hp) // 2
        ImageDraw.Draw(fond).rectangle([px - 1, py - 1, px + wp, py + hp],
                                       outline=(255, 255, 255, 70), width=1)
        fond.alpha_composite(im.resize((wp, hp), Image.LANCZOS).convert('RGBA'), (px, py))
        plein = fond

    plein = _voile(plein, lock)
    plein.alpha_composite(lock, (56, H - lock.size[1] - 48))
    plein.convert('RGB').save(dest, 'JPEG', quality=78, optimize=True, progressive=True)


def photos_utilisees():
    """Toutes les photos citées comme `img:` / `heroImg:` dans les données."""
    vus = set()
    for f in glob.glob(os.path.join(RACINE, 'app', '**', '*.js'), recursive=True) + \
             glob.glob(os.path.join(RACINE, 'lib', '*.js')):
        t = open(f, encoding='utf-8', errors='ignore').read()
        # jpg/png/avif compris : les photos d'artisans ne sont pas toutes en webp
        vus |= set(re.findall(r"(?:img|heroImg|hero)\s*[:=]\s*[\"'](/[^\"']+\.(?:webp|jpe?g|png|avif))[\"']", t))
        vus |= set(re.findall(r"heroImg=[\"'](/[^\"']+\.(?:webp|jpe?g|png|avif))[\"']", t))
    return sorted(vus)


def main():
    tout = '--tout' in sys.argv
    os.makedirs(SORTIE, exist_ok=True)
    lock = lockup()
    faites = 0
    for p in photos_utilisees():
        src = os.path.join(PUBLIC, p.lstrip('/'))
        if not os.path.exists(src):
            print(f"  photo absente : {p}"); continue
        dest = os.path.join(SORTIE, os.path.splitext(p.lstrip('/'))[0] + '.jpg')
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        if tout or not os.path.exists(dest):
            carte(src, dest, lock); faites += 1
    cartes = sorted(os.path.splitext(os.path.relpath(f, SORTIE))[0]
                    for f in glob.glob(os.path.join(SORTIE, '**', '*.jpg'), recursive=True))
    json.dump(cartes, open(os.path.join(RACINE, 'lib', 'ogCartes.json'), 'w'),
              ensure_ascii=False, indent=0)
    print(f"{faites} carte(s) générée(s), {len(cartes)} au total")


if __name__ == '__main__':
    main()
