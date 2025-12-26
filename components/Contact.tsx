'use client'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-16 h-16 bg-orange-200 rounded-full opacity-40"></div>
      <div className="absolute bottom-20 left-10 w-12 h-12 bg-purple-200 rounded-full opacity-40"></div>
      
      <div className="container mx-auto max-w-3xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get In <span className="text-primary">TOUCH</span>
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
          Have a project in mind? Let's work together to create something amazing
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:border-primary transition-colors bg-gray-50 focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:border-primary transition-colors bg-gray-50 focus:bg-white"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project Discussion"
              required
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:border-primary transition-colors bg-gray-50 focus:bg-white"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows={6}
              required
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:border-primary transition-colors resize-none bg-gray-50 focus:bg-white"
            ></textarea>
          </div>
          
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-primary text-white px-12 py-4 rounded-full hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
