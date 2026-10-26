import { useState } from 'react'
import { SERVICES } from '../data/content.js'

// Read from your .env file. See README for how to connect a real form service.
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT
const EMAIL = import.meta.env.VITE_CONTACT_EMAIL

const EMPTY = { name: '', email: '', service: '', message: '' }

function validate(v) {
  const errors = {}
  if (v.name.trim().length < 2) errors.name = 'Enter your name (at least 2 characters).'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) errors.email = 'Enter a valid email address, like name@example.com.'
  if (!v.service) errors.service = 'Choose the service you need.'
  if (v.message.trim().length < 20) errors.message = 'Describe your project in at least 20 characters.'
  return errors
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  // status: idle | sending | sent | error | notConnected
  const [status, setStatus] = useState('idle')

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      setStatus('idle')
      document.getElementById(`field-${Object.keys(found)[0]}`)?.focus()
      return
    }
    if (!ENDPOINT) {
      // No backend configured: be honest and do not claim anything was sent.
      setStatus('notConnected')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      setValues(EMPTY)
    } catch {
      setStatus('error')
    }
  }

  const field = (name) => ({
    id: `field-${name}`,
    name,
    value: values[name],
    onChange,
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `err-${name}` : undefined,
  })
  const err = (name) => errors[name] && <p className="field-error" id={`err-${name}`}>{errors[name]}</p>

  return (
    <section id="contact" className="section">
      <div className="container contact-grid">
        <div>
          <h2>Tell us about your project</h2>
          <p className="lead">
            Share what you want to build and which service fits. Even a rough idea is a good place to start.
          </p>
        </div>

        <form className="form" onSubmit={onSubmit} noValidate>
          <div className="field">
            <label htmlFor="field-name">Name</label>
            <input type="text" autoComplete="name" {...field('name')} />
            {err('name')}
          </div>
          <div className="field">
            <label htmlFor="field-email">Email</label>
            <input type="email" autoComplete="email" {...field('email')} />
            {err('email')}
          </div>
          <div className="field">
            <label htmlFor="field-service">Service required</label>
            <select {...field('service')}>
              <option value="">Select a service</option>
              {SERVICES.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
              <option value="Not sure yet">Not sure yet</option>
            </select>
            {err('service')}
          </div>
          <div className="field">
            <label htmlFor="field-message">Project description</label>
            <textarea rows="5" {...field('message')} />
            {err('message')}
          </div>

          <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send enquiry'}
          </button>

          <div role="status" aria-live="polite">
            {status === 'sent' && <p className="note note-ok">Thanks, your enquiry was sent. We will reply to the email address you gave.</p>}
            {status === 'notConnected' && (
              <p className="note note-info">
                Your details look good, but this form is not connected to an email service yet, so nothing was sent.
                {EMAIL && <> Please write to <a href={`mailto:${EMAIL}`}>{EMAIL}</a> instead.</>}
              </p>
            )}
            {status === 'error' && <p className="note note-bad">Something went wrong and your enquiry was not sent. Check your connection and try again.</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
