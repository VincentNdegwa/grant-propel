import Navbar from './Navbar.jsx'
import SignupForm from './SignupForm.jsx'
import { scrollToTarget } from '../lib/scroll.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <Navbar />
      <div className="hero__inner container">
        <h1 className="hero__title">
          Funding that <br className="br-desktop" />
          takes you further.
        </h1>
        <p className="hero__lead">
          Grant Propel sends small businesses and nonprofits grant opportunities worth a real look, with the
          eligibility details and deadlines laid out plainly, so you can decide what’s worth your time before you
          start writing.
        </p>
        <button
          type="button"
          className="btn btn--white hero__cta"
          onClick={() => scrollToTarget('#hero-signup', 'input[type=email]')}
        >
          Start Your Free Grant Discovery Trial
        </button>
        <SignupForm variant="center" id="hero-signup" />
      </div>
    </section>
  )
}
