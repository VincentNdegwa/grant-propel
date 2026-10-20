import SignupForm from './SignupForm.jsx'

export default function GetStarted() {
  return (
    <section className="get-started" aria-labelledby="get-started-title">
      <div className="get-started__inner">
        <div className="get-started__text">
          <p className="eyebrow">Get started</p>
          <h2 className="h2 h2--tight h2--light" id="get-started-title">
            Get the next opportunity <br className="br-desktop" />
            in your inbox.
          </h2>
          <p className="body body--light get-started__p">
            Tell us whether you run a small business or a nonprofit, and we’ll send grants and guidance that fit your
            type of organization.
          </p>
        </div>
        <SignupForm variant="left" id="signup" />
      </div>
    </section>
  )
}
