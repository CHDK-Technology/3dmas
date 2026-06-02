import { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState(null);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="contact-page">
      <div className="wrap">

        <div className="contact-eyebrow">Contact</div>
        <h1 className="contact-h1">Start a<br /><span>Project</span></h1>
        <p className="contact-sub">
          Tell us about your project. We'll review your requirements and get back to you with a quote and timeline.
        </p>

        <div className="contact-grid">

          {/* Form */}
          <div>
            {status === 'success' && (
              <div style={{ marginBottom: 28, padding: '16px 20px', background: 'rgba(0,194,100,.08)', border: '1px solid rgba(0,194,100,.2)', borderRadius: 6, color: '#4ade80', fontSize: 14 }}>
                Message received — we'll be in touch within 24 hours.
              </div>
            )}
            {status === 'error' && (
              <div style={{ marginBottom: 28, padding: '16px 20px', background: 'rgba(255,60,60,.08)', border: '1px solid rgba(255,60,60,.2)', borderRadius: 6, color: '#ff6b6b', fontSize: 14 }}>
                Something went wrong. Please try again or email us directly.
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <div>
                  <label className="contact-label">Name *</label>
                  <input
                    name="name" value={form.name} onChange={handleChange} required
                    placeholder="Your full name" className="contact-input"
                    style={focused === 'name' ? { borderColor: 'rgba(42,92,255,.5)' } : {}}
                    onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                  />
                </div>
                <div>
                  <label className="contact-label">Email *</label>
                  <input
                    name="email" type="email" value={form.email} onChange={handleChange} required
                    placeholder="you@company.com" className="contact-input"
                    style={focused === 'email' ? { borderColor: 'rgba(42,92,255,.5)' } : {}}
                    onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                  />
                </div>
              </div>

              <div>
                <label className="contact-label">Company</label>
                <input
                  name="company" value={form.company} onChange={handleChange}
                  placeholder="Your company name" className="contact-input"
                  style={focused === 'company' ? { borderColor: 'rgba(42,92,255,.5)' } : {}}
                  onFocus={() => setFocused('company')} onBlur={() => setFocused(null)}
                />
              </div>

              <div>
                <label className="contact-label">Project details *</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange} required
                  rows={6}
                  placeholder="Describe your project — type of work, industry, file formats, deadline..."
                  className="contact-input"
                  style={{ resize: 'vertical', minHeight: 140, ...(focused === 'message' ? { borderColor: 'rgba(42,92,255,.5)' } : {}) }}
                  onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={status === 'loading'}
                className="btn-primary"
                style={{ alignSelf: 'flex-start', opacity: status === 'loading' ? .6 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
              >
                {status === 'loading' ? 'Sending...' : <><span>Send Message</span> <ArrowRight size={15} /></>}
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { icon: <Mail size={16} />, label: 'Email', value: 'info@3dmas.in\nsales@3dmas.in' },
              { icon: <Phone size={16} />, label: 'Phone', value: '+91 96876 20011\n+91 99750 65096' },
              { icon: <MapPin size={16} />, label: 'Locations', value: 'Balewadi, Pune 411045\nManjusar, Vadodara 391775' },
            ].map(item => (
              <div key={item.label} className="contact-info-card">
                <div className="contact-info-icon">{item.icon}</div>
                <div>
                  <div className="contact-info-lbl">{item.label}</div>
                  <div className="contact-info-val">{item.value}</div>
                </div>
              </div>
            ))}
            <div className="contact-response-note">
              <strong>Typical response time:</strong> within 24 hours on business days. For urgent projects, call us directly.
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
