import { useId, useState } from 'react'
import OrgToggle from './OrgToggle.jsx'
import StateSelect from './StateSelect.jsx'
import { subscribe, validateEmail } from '../lib/subscribe.js'

const HELPER = 'Free. Opportunities and guidance for your type of organization, delivered by email.'


export default function SignupForm({ variant = 'center', id }) {
  const [orgType, setOrgType] = useState('small-business')
  const [state, setState] = useState('Texas')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [message, setMessage] = useState('')
  const emailId = useId()
  const helperId = useId()

  const onSubmit = async (e) => {
    e.preventDefault()
    const err = validateEmail(email)
    if (err) {
      setStatus('error')
      setMessage(err)
      return
    }
    setStatus('loading')
    setMessage('')
    try {
      await subscribe({ email, orgType, state })
      setStatus('success')
      setMessage(
        `You’re in. We’ll send ${orgType === 'nonprofit' ? 'nonprofit' : 'small business'} grants for ${state} to ${email.trim()}.`,
      )
      setEmail('')
    } catch {
      setStatus('error')
      setMessage('Something went wrong on our side. Please try again in a moment.')
    }
  }

  return (
    <form className={`signup signup--${variant}`} id={id} onSubmit={onSubmit} noValidate>
      <div className="signup__row">
        <OrgToggle value={orgType} onChange={setOrgType} name={`${emailId}-org`} />
        <StateSelect value={state} onChange={setState} />
      </div>
      <div className={`signup__email${status === 'error' ? ' has-error' : ''}`}>
        <label htmlFor={emailId} className="sr-only">
          Email address
        </label>
        <input
          id={emailId}
          className="signup__input glass"
          type="email"
          name="email"
          inputMode="email"
          autoComplete="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status === 'error') setStatus('idle')
          }}
          aria-invalid={status === 'error'}
          aria-describedby={helperId}
        />
        <button className="btn btn--white signup__submit" type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending…' : 'Send me grants'}
        </button>
      </div>
      <p id={helperId} className={`signup__helper is-${status}`} aria-live="polite">
        {status === 'success' || status === 'error' ? message : HELPER}
      </p>
    </form>
  )
}
