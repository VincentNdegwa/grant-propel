import heroDecor from './assets/decor/hero-decor.svg'
import inboxDecor from './assets/decor/inbox-decor.svg'
import whyDecor from './assets/decor/why-decor.svg'
import purposeDecor from './assets/decor/purpose-decor.svg'
import Hero from './components/Hero.jsx'
import Problem from './components/Problem.jsx'
import Inbox from './components/Inbox.jsx'
import Audience from './components/Audience.jsx'
import Difference from './components/Difference.jsx'
import Resources from './components/Resources.jsx'
import Purpose from './components/Purpose.jsx'
import GetStarted from './components/GetStarted.jsx'
import Footer from './components/Footer.jsx'


function DecorLayer() {
  return (
    <div className="decor" aria-hidden="true">
      <div className="bleed bleed--hero" />
      <div className="bleed bleed--hero-left" />
      <div className="bleed bleed--gray" />
      <div className="bleed bleed--purpose-left" />
      <div className="bleed bleed--footer" />
      <div className="decor__stage">
        <img src={heroDecor} className="decor__item" style={{ top: 0 }} width="1440" height="1432" alt="" />
        <img src={inboxDecor} className="decor__item" style={{ top: 1739 }} width="1440" height="893" alt="" />
        <img src={whyDecor} className="decor__item" style={{ top: 2833 }} width="1440" height="1579" alt="" />
        <img src={purposeDecor} className="decor__item" style={{ top: 4460 }} width="1440" height="850" alt="" />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="page">
      <DecorLayer />
      <main className="content">
        <Hero />
        <Problem />
        <Inbox />
        <Audience />
        <Difference />
        <Resources />
        <Purpose />
        <GetStarted />
      </main>
      <Footer />
    </div>
  )
}
