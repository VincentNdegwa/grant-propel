export function scrollToTarget(hash, focusSelector) {
  const id = hash.replace('#', '')
  const el = id === 'top' ? document.body : document.getElementById(id)
  if (!el) return
  if (id === 'top') window.scrollTo({ top: 0, behavior: 'smooth' })
  else el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  if (focusSelector) {
    const target = el.querySelector(focusSelector)
    if (target) setTimeout(() => target.focus({ preventScroll: true }), 450)
  }
  if (history.replaceState) history.replaceState(null, '', id === 'top' ? ' ' : `#${id}`)
}
