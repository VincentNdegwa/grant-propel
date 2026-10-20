import { FEATURES } from '../data/content.js'

export default function Inbox() {
  return (
    <section className="inbox" aria-labelledby="inbox-title">
      <div className="container inbox__inner">
        <p className="eyebrow eyebrow--center">What you get</p>
        <h2 className="h2 center" id="inbox-title">
          What lands in your inbox.
        </h2>
        <p className="body center inbox__sub">Free, for small businesses and nonprofits.</p>
        <ul className="features">
          {FEATURES.map((f) => (
            <li className="feature" key={f.title}>
              <span className="icon-box icon-box--75">
                <img src={f.icon} width="75" height="75" alt="" />
              </span>
              <h3 className="feature__title">{f.title}</h3>
              <p className="feature__body">{f.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
