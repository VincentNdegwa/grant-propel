import { AUDIENCES } from '../data/content.js'
import { ShapedPhoto } from './Shapes.jsx'

export default function Audience() {
  return (
    <section className="audience" aria-labelledby="audience-title">
      <div className="container">
        <p className="eyebrow">Who it’s for</p>
        <h2 className="h2" id="audience-title">
          Built for builders.
        </h2>
        <p className="body audience__sub">
          For the people running organizations without a grants department behind them.
        </p>
        <div className="audience__grid">
          {AUDIENCES.map((a) => (
            <article className="audience-card" key={a.id}>
              <div className="audience-card__media">
                <ShapedPhoto variant="card" src={a.photo} alt={a.photoAlt} />
                <img className="audience-card__badge" src={a.badge} width="65" height="65" alt="" />
              </div>
              <h3 className="audience-card__title">{a.title}</h3>
              <p className="body audience-card__body">{a.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
