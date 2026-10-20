import { ShapedPhoto } from './Shapes.jsx'
import teamPhoto from '../assets/photos/team.jpg'

export default function Problem() {
  return (
    <section className="problem" aria-labelledby="problem-title">
      <div className="container problem__inner">
        <div className="problem__text">
          <p className="eyebrow">The problem</p>
          <h2 className="h2" id="problem-title">
            Finding grants is the <br className="br-desktop" />
            easy part.
          </h2>
          <p className="body problem__p1">
            There are plenty of places to find a list of grants. What’s harder is knowing which ones you actually
            qualify for, which ones are realistic for an organization your size, and which ones will cost you twenty
            hours of writing for an application that closes without you knowing.
          </p>
          <p className="problem__focus">That’s the part we focus on.</p>
          <p className="body problem__p2">
            Grant Propel looks at eligibility, fit, and timing before an opportunity reaches you, so more of your time
            goes into applications that fit your organization.
          </p>
        </div>
        <ShapedPhoto
          variant="team"
          src={teamPhoto}
          alt="A small team celebrating together with balloons in their office"
          className="problem__photo"
        />
      </div>
    </section>
  )
}
