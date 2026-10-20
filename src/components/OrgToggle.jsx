import { useRef } from 'react'
import { ORG_TYPES } from '../data/content.js'

export default function OrgToggle({ value, onChange, name }) {
  const refs = useRef([])
  const activeIndex = Math.max(0, ORG_TYPES.findIndex((o) => o.value === value))

  const onKeyDown = (e) => {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(e.key)) return
    e.preventDefault()
    let next = activeIndex
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (activeIndex + 1) % ORG_TYPES.length
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (activeIndex - 1 + ORG_TYPES.length) % ORG_TYPES.length
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = ORG_TYPES.length - 1
    onChange(ORG_TYPES[next].value)
    refs.current[next]?.focus()
  }

  return (
    <div className="toggle glass" role="radiogroup" aria-label="Organization type" data-active={activeIndex}>
      <span className="toggle__pill" aria-hidden="true" />
      {ORG_TYPES.map((opt, i) => (
        <button
          key={opt.value}
          ref={(el) => (refs.current[i] = el)}
          type="button"
          role="radio"
          name={name}
          aria-checked={i === activeIndex}
          tabIndex={i === activeIndex ? 0 : -1}
          className={`toggle__option${i === activeIndex ? ' is-active' : ''}`}
          onClick={() => onChange(opt.value)}
          onKeyDown={onKeyDown}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
