import { useState } from 'react';
import experienceData from '../Data/experience.json';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="space-y-16">
      {/* Contact Form */}
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Get In Touch</h1>
          <p className="text-zinc-400 text-sm">Send a message for inquiries or collaborations.</p>
        </div>

        {submitted && (
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-lg text-sm text-center">
            Thank you! Your message has been recorded.
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4">
          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1">Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-100 focus:outline-none focus:border-amber-400"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-100 focus:outline-none focus:border-amber-400"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1">Message</label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-100 focus:outline-none focus:border-amber-400"
            />
          </div>
          <button type="submit" className="w-full py-3 bg-amber-400 text-zinc-950 font-semibold rounded-lg hover:bg-amber-300">
            Send Message
          </button>
        </form>
      </div>

      {/* Volunteering & Experience Section */}
      <div className="space-y-8 pt-8 border-t border-zinc-800">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Leadership & Volunteering Experience</h2>
          <p className="text-zinc-400 text-sm">Government organization support, tech ops, and candidate mentorship.</p>
        </div>

        <div className="space-y-8">
          {experienceData.map((exp) => (
            <div key={exp.id} className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4">
              <div>
                <h3 className="font-bold text-lg">{exp.role} | <span className="text-amber-400">{exp.organization}</span></h3>
                <p className="text-xs text-zinc-400">{exp.period}</p>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">{exp.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {exp.photos.map((photo, idx) => (
                  <div key={idx} className="space-y-2">
                    <img src={photo.url} alt={photo.caption} className="w-full h-64 object-cover rounded-lg bg-zinc-800 border border-zinc-800" />
                    <p className="text-xs text-zinc-400 italic text-center">{photo.caption}</p>
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