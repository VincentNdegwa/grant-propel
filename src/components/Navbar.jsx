import logo from '../assets/logo.svg'
import { NAV_LINKS } from '../data/content.js'
import { scrollToTarget } from '../lib/scroll.js'

export default function Navbar() {
  const go = (e, href, focus) => {
    e.preventDefault()
    scrollToTarget(href, focus)
  }

  return (
    <header className="nav">
      <a href="#top" className="nav__logo" onClick={(e) => go(e, '#top')} aria-label="Grant Propel home">
        <img src={logo} width="238" height="34" alt="Grant Propel" />
      </a>
      <nav className="nav__links" aria-label="Primary">
        {NAV_LINKS.map((l) => (
          <a key={l.label} href={l.href} onClick={(e) => go(e, l.href)}>
            {l.label}
          </a>
        ))}
      </nav>
      <a href="#signup" className="btn btn--ghost nav__cta" onClick={(e) => go(e, '#signup', 'input[type=email]')}>
        Send me grants
      </a>
    </header>
  )
}
