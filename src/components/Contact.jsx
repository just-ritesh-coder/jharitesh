import React from 'react'
import { useForm } from 'react-hook-form'

export default function Contact(){
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = (data) => {
    // Placeholder: send to API or email service
    alert('Message sent — thank you!')
    reset()
  }

  return (
    <form className="contact-form card" onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" {...register('name')} required />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" {...register('email')} type="email" required />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" {...register('message')} rows={4} required />
      </div>
      <button className="primary-button" type="submit">Send message</button>
    </form>
  )
}
