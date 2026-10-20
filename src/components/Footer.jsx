import logo from '../assets/logo.svg'
import facebook from '../assets/icons/social-facebook.svg'
import instagram from '../assets/icons/social-instagram.svg'
import linkedin from '../assets/icons/social-linkedin.svg'
import { NAV_LINKS } from '../data/content.js'
import { scrollToTarget } from '../lib/scroll.js'

const SOCIALS = [
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: facebook },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: instagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: linkedin },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bar">
        <a
          href="#top"
          className="footer__logo"
          onClick={(e) => {
            e.preventDefault()
            scrollToTarget('#top')
          }}
          aria-label="Grant Propel home"
        >
          <img src={logo} width="238" height="34" alt="Grant Propel" />
        </a>
        <nav className="footer__links" aria-label="Footer">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => {
                e.preventDefault()
                scrollToTarget(l.href)
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <ul className="footer__social">
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                <img src={s.icon} width="44" height="44" alt="" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="footer__copy">© {new Date().getFullYear()} Grant Propel. All rights reserved.</p>
    </footer>
  )
}
