import { DIFFERENCES } from '../data/content.js'

export default function Difference() {
  return (
    <section className="difference" aria-labelledby="difference-title">
      <div className="container difference__inner">
        <p className="eyebrow eyebrow--center">Why we’re different</p>
        <h2 className="h2 h2--light center" id="difference-title">
          More than a database.
        </h2>
        <p className="body body--light center difference__sub">Other tools hand you a search bar and wish you luck.</p>
        <ul className="diff-cards">
          {DIFFERENCES.map((d, i) => (
            <li className={`diff-card${i === 1 ? ' diff-card--featured' : ''}`} key={d.title}>
              <span className="icon-box icon-box--65">
                <img src={d.icon} width="65" height="65" alt="" />
              </span>
              <h3 className="diff-card__title">{d.title}</h3>
              <p className="body body--light diff-card__body">{d.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
