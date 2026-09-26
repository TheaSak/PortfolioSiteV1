import { useState } from 'react';
import experienceData from '../Data/experience.json';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'The message could not be saved. Please try again.');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitError(error.message || 'The message could not be saved. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-12">
      {/* Contact Form */}
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Get In Touch</h1>
          <p className="text-zinc-600 text-sm">Send a message for inquiries or collaborations.</p>
        </div>

        {submitted && (
          <div role="status" className="p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-lg text-sm text-center">
            Thank you! Your message has been recorded.
          </div>
        )}
        {submitError && (
          <div role="alert" className="p-4 bg-red-500/10 border border-red-500/30 text-red-300 rounded-lg text-sm text-center">
            {submitError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white border border-zinc-200 p-4 sm:p-6 rounded-xl space-y-4 shadow-sm">
          <div>
            <label htmlFor="contact-name" className="block text-xs font-medium text-zinc-700 mb-1">Name</label>
            <input
              id="contact-name"
              type="text"
              required
              maxLength={100}
              autoComplete="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 bg-white border border-zinc-300 rounded-lg text-zinc-900 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-xs font-medium text-zinc-700 mb-1">Email</label>
            <input
              id="contact-email"
              type="email"
              required
              maxLength={254}
              autoComplete="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 bg-white border border-zinc-300 rounded-lg text-zinc-900 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-xs font-medium text-zinc-700 mb-1">Message</label>
            <textarea
              id="contact-message"
              required
              rows={4}
              maxLength={5000}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 bg-white border border-zinc-300 rounded-lg text-zinc-900 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20"
            />
          </div>
          <button type="submit" disabled={isSubmitting} className="w-full py-3 bg-amber-500 text-zinc-950 font-semibold rounded-lg hover:bg-amber-400 disabled:cursor-wait disabled:opacity-60">
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      {/* Volunteering & Experience Section */}
      <div className="space-y-8 pt-8 border-t border-zinc-200">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Experience</h2>
          <p className="text-zinc-600 text-sm">Government organization support, tech ops, and candidate mentorship.</p>
        </div>

        <div className="space-y-6">
          {experienceData.map((exp) => (
            <div key={exp.id} className="bg-white border border-zinc-200 p-4 sm:p-6 rounded-xl space-y-4 shadow-sm">
              <div>
                <h3 className="font-bold text-lg">{exp.role} | <span className="text-amber-800">{exp.organization}</span></h3>
                <p className="text-xs text-zinc-500">{exp.period}</p>
              </div>
              <p className="text-sm text-zinc-700 leading-relaxed">{exp.description}</p>

              <div className="flex flex-col items-center pt-1">
                {exp.photos.map((photo, idx) => (
                  <div key={idx} className="w-full max-w-2xl space-y-2">
                    <img src={photo.url} alt={photo.caption} className="mx-auto h-100 w-full object-cover rounded-lg bg-zinc-100 border border-zinc-200" />
                    <p className="text-xs text-zinc-600 italic text-center">{photo.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}