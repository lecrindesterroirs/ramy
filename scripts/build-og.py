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
from PIL import Image, ImageDraw

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
    return l.resize((lw, round(lw * l.size[1] / l.size[0])), Image.LANCZOS)


def carte(src, dest, lock):
    im = Image.open(src).convert('RGB')
    w, h = im.size
    cible = W / H
    if w / h > cible:
        nw = round(h * cible); x = (w - nw) // 2
        im = im.crop((x, 0, x + nw, h))
    else:
        nh = round(w / cible); y = round((h - nh) * 0.38)   # le sujet est plutôt haut
        im = im.crop((0, y, w, y + nh))
    im = im.resize((W, H), Image.LANCZOS).convert('RGBA')

    z = im.convert('L').crop((40, H - 190, 40 + lock.size[0] + 40, H - 30))
    clair = sum(z.getdata()) / (z.size[0] * z.size[1])
    force = 120 if clair < 110 else (175 if clair < 160 else 215)

    voile = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(voile)
    for y in range(H):
        t = max(0.0, (y - H * 0.50) / (H * 0.50))
        d.line([(0, y), (W, y)], fill=(20, 17, 14, int(force * t * t)))
    im = Image.alpha_composite(im, voile)
    im.alpha_composite(lock, (56, H - lock.size[1] - 48))
    im.convert('RGB').save(dest, 'JPEG', quality=78, optimize=True, progressive=True)


def photos_utilisees():
    """Toutes les photos citées comme `img:` / `heroImg:` dans les données."""
    vus = set()
    for f in glob.glob(os.path.join(RACINE, 'app', '**', '*.js'), recursive=True) + \
             glob.glob(os.path.join(RACINE, 'lib', '*.js')):
        t = open(f, encoding='utf-8', errors='ignore').read()
        vus |= set(re.findall(r"(?:img|heroImg|hero)\s*[:=]\s*[\"'](/[^\"']+\.webp)[\"']", t))
        vus |= set(re.findall(r"heroImg=[\"'](/[^\"']+\.webp)[\"']", t))
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
