const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function validateEmail(email) {
  const value = email.trim()
  if (!value) return 'Enter your email address.'
  if (!EMAIL_RE.test(value)) return 'That email doesn’t look right — check it and try again.'
  return null
}

export async function subscribe({ email, orgType, state }) {
  const payload = { email: email.trim(), orgType, state, source: 'landing', createdAt: new Date().toISOString() }
  const endpoint = import.meta.env.VITE_SIGNUP_ENDPOINT

  if (endpoint) {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!res.ok) throw new Error(`Signup failed (${res.status})`)
    return payload
  }

  await new Promise((r) => setTimeout(r, 600))
  try {
    const key = 'grant-propel:signups'
    const list = JSON.parse(localStorage.getItem(key) || '[]')
    list.push(payload)
    localStorage.setItem(key, JSON.stringify(list))
  } catch {
    // Storage can be unavailable (private mode); the signup still counts as accepted.
  }
  return payload
}
