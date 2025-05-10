import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:8080/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const result = await res.json()
      console.log('Submitted:', result)
      alert('Message sent!')
    } catch (err) {
      alert('Error sending message')
    }
  }

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Your Name" onChange={handleChange} /><br />
        <input name="email" type="email" placeholder="Your Email" onChange={handleChange} /><br />
        <textarea name="message" placeholder="Your Message" onChange={handleChange}></textarea><br />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact