import { useState } from 'react'
import type { FormEvent } from 'react'
import './ContactForm.css'

interface ContactFormProps {
  recipient: string
}

function ContactForm({ recipient }: ContactFormProps) {
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')
  const [from, setFrom] = useState('')
  const [status, setStatus] = useState<string | null>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const mailSubject = subject.trim() || 'Say hi!'
    const mailBody = [`From: ${from.trim() || 'unknown'}`, '', body.trim()].join('\n')

    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`

    window.location.href = mailto
    setStatus('Opening your email client…')
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="contact-form__field">
        <span className="contact-form__label">Introduce Yourself!</span>
        <input
          type="text"
          name="message"
          className="contact-form__input"
          placeholder="Say hi!"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        />
      </label>

      <label className="contact-form__field">
        <span className="contact-form__label">Write here</span>
        <textarea
          name="body"
          rows={3}
          className="contact-form__input contact-form__input--textarea"
          placeholder="reach out if you want to discuss AI or something you want to build"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
      </label>

      <label className="contact-form__field">
        <span className="contact-form__label">From</span>
        <input
          type="email"
          name="from"
          className="contact-form__input"
          placeholder="Use your favourite email"
          value={from}
          onChange={(event) => setFrom(event.target.value)}
        />
      </label>

      <div className="contact-form__footer">
        <button type="submit" className="contact-form__submit">
          Contact Me :)
        </button>
        {status && <p className="contact-form__status">{status}</p>}
      </div>
    </form>
  )
}

export default ContactForm
