import { useEffect, useId, useRef, useState } from 'react'
import { US_STATES } from '../data/content.js'

function Chevron() {
  return (
    <svg className="select__chevron" width="12" height="7" viewBox="0 0 12 7" aria-hidden="true">
      <path d="M1 1l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function StateSelect({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const [highlight, setHighlight] = useState(() => Math.max(0, US_STATES.indexOf(value)))
  const rootRef = useRef(null)
  const listRef = useRef(null)
  const buttonRef = useRef(null)
  const typeahead = useRef({ text: '', t: 0 })
  const listId = useId()

  useEffect(() => {
    if (!open) return
    const onDoc = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false)
    }
    document.addEventListener('pointerdown', onDoc)
    return () => document.removeEventListener('pointerdown', onDoc)
  }, [open])

  useEffect(() => {
    if (!open) return
    const item = listRef.current?.children[highlight]
    item?.scrollIntoView({ block: 'nearest' })
  }, [open, highlight])

  const openList = () => {
    setHighlight(Math.max(0, US_STATES.indexOf(value)))
    setOpen(true)
  }

  const choose = (i) => {
    onChange(US_STATES[i])
    setOpen(false)
    buttonRef.current?.focus()
  }

  const onKeyDown = (e) => {
    if (!open && ['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) {
      e.preventDefault()
      openList()
      return
    }
    if (!open) return
    if (e.key === 'ArrowDown') { e.preventDefault(); setHighlight((h) => Math.min(US_STATES.length - 1, h + 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setHighlight((h) => Math.max(0, h - 1)) }
    else if (e.key === 'Home') { e.preventDefault(); setHighlight(0) }
    else if (e.key === 'End') { e.preventDefault(); setHighlight(US_STATES.length - 1) }
    else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); choose(highlight) }
    else if (e.key === 'Escape' || e.key === 'Tab') { setOpen(false) }
    else if (e.key.length === 1) {
      const now = Date.now()
      const ta = typeahead.current
      ta.text = now - ta.t > 600 ? e.key.toLowerCase() : ta.text + e.key.toLowerCase()
      ta.t = now
      const idx = US_STATES.findIndex((s) => s.toLowerCase().startsWith(ta.text))
      if (idx >= 0) setHighlight(idx)
    }
  }

  return (
    <div className={`select${open ? ' is-open' : ''}`} ref={rootRef}>
      <button
        ref={buttonRef}
        type="button"
        className="select__button glass"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={`State: ${value}`}
        onClick={() => (open ? setOpen(false) : openList())}
        onKeyDown={onKeyDown}
      >
        <span className="select__value">{value}</span>
        <Chevron />
      </button>
      {open && (
        <ul className="select__list" role="listbox" id={listId} ref={listRef} aria-label="State" tabIndex={-1}>
          {US_STATES.map((s, i) => (
            <li
              key={s}
              role="option"
              aria-selected={s === value}
              className={`select__option${i === highlight ? ' is-highlighted' : ''}${s === value ? ' is-selected' : ''}`}
              onPointerEnter={() => setHighlight(i)}
              onClick={() => choose(i)}
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
