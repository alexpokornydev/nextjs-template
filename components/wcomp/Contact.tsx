'use client';
import { useState } from 'react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, mail, request: message }),
      });

      if (res.ok) {
        setStatus('success');
        setName('');
        setMail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id='contact' className="bg-background1 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-4xl font-bold mb-2">Let's get in touch</h2>
          <p className="text-gray-400 mb-8">
            Have a project idea? Let’s discuss it and create something exceptional together.
          </p>
          <form onSubmit={handleSubmit} className="bg-[#1e1e2f] p-6 rounded-xl shadow-md">
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 rounded bg-background1 border border-gray-600 text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Email *</label>
              <input
                type="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                required
                className="w-full px-4 py-2 rounded bg-background1 border border-gray-600 text-white"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium">Message *</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                className="w-full px-4 py-2 rounded bg-background1 border border-gray-600 text-white"
              />
            </div>
            <button
              type="submit"
              className="bg-primary hover:bg-pink-600 text-white px-6 py-2 rounded font-semibold"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send message'}
            </button>
            {status === 'success' && (
              <p className="text-green-400 mt-4">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 mt-4">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-[#1e1e2f] p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-3">Informations</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>📍 Based in Paris, France</li>
              <li>⏱ I usually respond within 24h</li>
              <li className="text-green-400">✅ Available for new projects</li>
            </ul>
          </div>

          <div className="bg-[#1e1e2f] p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-3">Find me on</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {['LinkedIn', 'Dribbble', 'Behance', 'Instagram'].map((platform) => (
                <button
                  key={platform}
                  className="bg-background1 border border-gray-600 text-white py-2 rounded hover:bg-primary hover:text-white"
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-primary/35 p-4 rounded-xl border border-primary text-white">
            <span className="block font-semibold">📧 Direct email</span>
            <span className="text-sm text-gray-200">info@javaoff.com</span>
            <span className="text-sm text-gray-200">support@javaoff.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
