# UI Patterns — Extraits copy-pastables

## 1. Bulk select dans une liste

Pattern complet — ouvre `components/produits/ProduitsListTable.tsx` pour le full référent. Squelette :

```tsx
'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Trash2, Loader2 } from 'lucide-react'

export function XxxListTable({ items }: Props) {
  const router = useRouter()
  const [selected, setSelected]   = useState<Set<string>>(new Set())
  const [loading, setLoading]     = useState<string | null>(null)
  const [showConfirm, setShowConfirm] = useState(false)

  const allChecked  = items.length > 0 && selected.size === items.length
  const someChecked = selected.size > 0 && selected.size < items.length

  // Reset selection quand items change
  useEffect(() => {
    setSelected(prev => {
      const ids = new Set(items.map(i => i.id))
      const filtered = new Set<string>()
      for (const id of prev) if (ids.has(id)) filtered.add(id)
      return filtered.size === prev.size ? prev : filtered
    })
  }, [items])

  function toggleOne(id: string, e: React.ChangeEvent<HTMLInputElement>) {
    e.stopPropagation()
    setSelected(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }
  function toggleAll() {
    if (selected.size > 0) setSelected(new Set())
    else setSelected(new Set(items.map(i => i.id)))
  }

  async function bulkDelete() {
    setLoading('delete')
    setShowConfirm(false)
    try {
      const { createClient } = await import('@/lib/supabase/client')
      const sb = createClient()
      const { error } = await sb.from('table_name').delete().in('id', Array.from(selected))
      if (error) throw error
      setSelected(new Set())
      router.refresh()
    } catch (e: unknown) {
      alert(e instanceof Error ? e.message : 'Erreur')
    } finally { setLoading(null) }
  }

  // Header checkbox avec état indeterminate
  function setHeaderRef(el: HTMLInputElement | null) {
    if (el) el.indeterminate = someChecked
  }

  // ... rendu : barre d'action jaune quand selected.size > 0
  // bg: 'rgba(224,161,38,0.08)', border: 'rgba(224,161,38,0.2)', text: '#92610A'
}
```

**Barre d'action bulk (visible si `selected.size > 0`) :**

```tsx
{selected.size > 0 && (
  <div
    className="flex items-center gap-2 px-4 py-2 flex-wrap"
    style={{ background: 'rgba(224,161,38,0.08)', borderBottom: '1px solid rgba(224,161,38,0.2)' }}
  >
    <span className="text-[11px] font-medium" style={{ color: '#92610A' }}>
      {selected.size} sélectionné{selected.size > 1 ? 's' : ''}
    </span>
    {/* boutons d'action statut */}
    <button
      onClick={() => setShowConfirm(true)}
      disabled={!!loading}
      className="flex items-center gap-1 px-2 py-1 text-[10.5px] font-medium text-white"
      style={{ background: '#DC2626' }}
    >
      {loading === 'delete' ? <Loader2 size={10} className="animate-spin" /> : <Trash2 size={10} />}
      Suppr.
    </button>
  </div>
)}
```

---

## 2. Retry without column (migration en cours)

Quand on ajoute une colonne via migration mais que le code doit fonctionner AVANT que la migration soit lancée :

```ts
async function updateWithFallback(sb, id, patch, optionalCol) {
  const payload = { ...patch }
  let { error } = await sb.from('table').update(payload).eq('id', id)
  if (error && new RegExp(optionalCol).test(error.message)) {
    delete payload[optionalCol]
    ;({ error } = await sb.from('table').update(payload).eq('id', id))
  }
  if (error) throw error
}
```

Exemple concret (date_acceptation devis) :

```ts
const payload: Record<string, any> = {
  statut: 'accepte',
  updated_at: new Date().toISOString(),
  date_acceptation: new Date().toISOString().split('T')[0],
}
let { error } = await sb.from('devis').update(payload).eq('id', devisId)
if (error && /date_acceptation/.test(error.message)) {
  delete payload.date_acceptation
  ;({ error } = await sb.from('devis').update(payload).eq('id', devisId))
}
if (error) throw error
```

---

## 3. Throttle IA via localStorage + quiet hours

Pattern référent : `GmailTasksPanel.tsx`, `TachesPanel.tsx`.

```ts
'use client'
import { useState, useEffect, useCallback } from 'react'

const REFRESH_COOLDOWN_MS = 10 * 60 * 1000      // 10 minutes
const LAST_KEY = 'lecrin:<feature>_last_<action>'

function isQuietHours(): boolean {
  const hour = Number(
    new Intl.DateTimeFormat('fr-FR', {
      timeZone: 'Europe/Paris',
      hour: '2-digit',
      hour12: false,
    }).format(new Date())
  )
  return hour >= 22 || hour < 6
}

const loadAll = useCallback(async (opts: { force?: boolean } = {}) => {
  const quiet = isQuietHours()
  let last = 0
  try {
    const raw = window.localStorage.getItem(LAST_KEY)
    last = raw ? Number(raw) : 0
  } catch {}

  const shouldRun = !quiet && (opts.force || Date.now() - last > REFRESH_COOLDOWN_MS)

  // 1) Charge la liste tout de suite (rendu instantané)
  await fetchCurrent()
  setLoading(false)

  // 2) En arrière-plan, lance le job coûteux si nécessaire
  if (shouldRun) {
    setProcessing(true)
    try {
      await fetch('/api/<feature>/run', { method: 'POST' })
      window.localStorage.setItem(LAST_KEY, String(Date.now()))
      await fetchCurrent()
    } catch {}
    setProcessing(false)
  }
}, [])
```

**Header avec bouton "↻ Rafraîchir" et indicateur de fraîcheur :**

```tsx
<button onClick={() => loadAll({ force: true })} disabled={processing}>
  ↻ Rafraîchir
</button>
{quietHours && <span>· Veille de nuit (22h-6h)</span>}
{lastAt && <span>· Mis à jour à {new Date(lastAt).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</span>}
```

---

## 4. Auto-génération idempotente (règles métier → tâches)

Pattern référent : `app/api/taches/generate/route.ts`.

```ts
// Pour chaque entité éligible à une règle, calcule source_key unique
const sourceKey = `devis_relance:${devis.id}`
// (ou avec période pour re-fire mensuel : `client_dormant:${client.id}:${YYYYMM}`)

const { error } = await sb.from('taches').insert({
  titre:       `Relancer ${nom}`,
  echeance:    endOfDay(today),
  priorite:    'normale',
  source:      'auto_devis_relance',
  source_key:  sourceKey,
  client_id:   devis.client_id,
  devis_id:    devis.id,
})

// Si la tâche existe déjà : Postgres renvoie 23505 (unique violation)
// On l'ignore — c'est exactement le comportement voulu
if (error && error.code !== '23505') {
  errors.push({ rule, source_key: sourceKey, message: error.message })
}
```

**Toujours wrap chaque règle dans try/catch** pour que si une colonne manque (ex. `validite` sur devis), la règle skip et les autres continuent.

---

## 5. Date picker programmatique (showPicker)

Pour ouvrir un `<input type="date">` au clic d'un bouton custom :

```tsx
const dateInputRef = useRef<HTMLInputElement>(null)

function openDatePicker() {
  const el = dateInputRef.current
  if (!el) return
  if (typeof el.showPicker === 'function') {
    try { el.showPicker(); return } catch {}
  }
  el.focus(); el.click()  // fallback vieux navigateurs
}

<div className="relative">
  <button type="button" onClick={openDatePicker}>📅 {pickedDate || 'Date…'}</button>
  <input
    ref={dateInputRef}
    type="date"
    value={pickedDate}
    onChange={e => setPickedDate(e.target.value)}
    className="absolute left-0 top-full mt-1"
    style={{ width: 1, height: 1, opacity: 0, pointerEvents: 'none' }}
    aria-hidden="true"
    tabIndex={-1}
  />
</div>
```

⚠️ **NE PAS** utiliser l'astuce d'input invisible en `absolute inset-0 opacity-0` superposé sur un label — ça ne déclenche pas le picker sur Chrome récent. Toujours passer par `showPicker()`.

---

## 6. Quick-add IA (parsing langage naturel)

Référent : `TacheQuickAdd.tsx`.

Flow :
1. User tape du texte libre dans un input
2. Submit → POST `/api/ia/parse-<feature>` avec `{ text }`
3. La route appelle Claude Haiku avec un prompt qui inclut la date du jour (Europe/Paris)
4. Modal de confirmation montre les champs parsés (tous éditables)
5. User valide → POST `/api/<feature>` avec le payload final

Côté route IA, fallback robuste :

```ts
// Si pas de clé Anthropic OU parsing échoue → retourne juste le texte brut
return NextResponse.json({
  titre: text,
  echeance: null,
  priorite: 'normale',
  description: null,
  fallback: true,
})
```

---

## 7. Empty states soignés

Toujours afficher un message + idéalement un CTA, jamais une page blanche.

```tsx
{items.length === 0 && (
  <div className="flex flex-col items-center justify-center py-12 gap-3">
    <div className="text-sm" style={{ color: 'var(--os-text-4)' }}>
      Aucun élément pour l'instant.
    </div>
    <Link href="/xxx/nouveau" className="text-xs px-3 py-1.5 text-white" style={{ background: '#07111F' }}>
      Créer le premier
    </Link>
  </div>
)}
```

---

## 8. Couleurs par statut (à respecter)

```ts
// Devis
brouillon → #888
en_attente → #D97706 (orange) / bg #FEF3C7
accepte → #16A34A (vert) / bg #F0FDF4
refuse → #DC2626 (rouge) / bg #FEE2E2
annule, expire → #888

// Factures
brouillon → #888
envoyee → #2060A8 (bleu) / bg #EBF1FA
payee → #16A34A
en_retard → #DC2626
annulee → #888

// Commandes
en_attente → #D97706
confirmee → #2060A8
en_preparation → #6D28D9 (violet) / bg #EDE9FE
livree → #16A34A
annulee → #888
```
