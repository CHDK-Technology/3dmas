import { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const inputStyle = {
  width: '100%',
  background: 'var(--dark-3)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '4px',
  padding: '12px 16px',
  fontSize: '14px',
  color: 'white',
  outline: 'none',
  fontFamily: "'Barlow', sans-serif",
  transition: 'border-color 0.2s',
};

const labelStyle = {
  display: 'block',
  fontSize: '12px',
  fontWeight: 600,
  color: 'rgba(255,255,255,0.5)',
  letterSpacing: '0.8px',
  textTransform: 'uppercase',
  marginBottom: '8px',
  fontFamily: "'Barlow Condensed', sans-serif",
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
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

  const focusStyle = (field) => focused === field
    ? { ...inputStyle, borderColor: 'var(--primary)' }
    : inputStyle;

  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', paddingTop: '120px', paddingBottom: '100px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div style={{ marginBottom: '70px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '14px' }}>
            Contact
          </div>
          <h1 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 'clamp(40px, 6vw, 68px)', fontWeight: 800, lineHeight: 0.95,
            letterSpacing: '-1px', color: 'white', marginBottom: '20px'
          }}>
            START A<br />
            <span style={{ color: 'var(--primary)' }}>PROJECT</span>
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.45)', maxWidth: '500px', lineHeight: 1.7 }}>
            Tell us about your project. We'll review your requirements and get back to you with a quote and timeline.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '60px', alignItems: 'start' }}>

          {/* Form */}
          <div>
            {status === 'success' && (
              <div style={{
                marginBottom: '28px', padding: '16px 20px',
                background: 'rgba(0,194,100,0.1)', border: '1px solid rgba(0,194,100,0.25)',
                borderRadius: '6px', color: '#4ade80', fontSize: '14px'
              }}>
                Message received — we'll be in touch within 24 hours.
              </div>
            )}
            {status === 'error' && (
              <div style={{
                marginBottom: '28px', padding: '16px 20px',
                background: 'rgba(232,65,10,0.1)', border: '1px solid rgba(232,65,10,0.25)',
                borderRadius: '6px', color: 'var(--primary)', fontSize: '14px'
              }}>
                Something went wrong. Please try again or email us directly.
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={labelStyle}>Name *</label>
                  <input
                    name="name" value={form.name} onChange={handleChange} required
                    placeholder="Your full name"
                    style={focusStyle('name')}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input
                    name="email" type="email" value={form.email} onChange={handleChange} required
                    placeholder="you@company.com"
                    style={focusStyle('email')}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Company</label>
                <input
                  name="company" value={form.company} onChange={handleChange}
                  placeholder="Your company name"
                  style={focusStyle('company')}
                  onFocus={() => setFocused('company')}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <div>
                <label style={labelStyle}>Project details *</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange} required
                  rows={6}
                  placeholder="Describe your project — type of work, industry, file formats, deadline..."
                  style={{ ...focusStyle('message'), resize: 'vertical', minHeight: '140px' }}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={status === 'loading'}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  background: status === 'loading' ? 'rgba(232,65,10,0.5)' : 'var(--primary)',
                  color: 'white', padding: '15px 36px', borderRadius: '4px',
                  fontSize: '14px', fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase',
                  fontFamily: "'Barlow Condensed', sans-serif", border: 'none', cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  alignSelf: 'flex-start', transition: 'background 0.2s'
                }}
              >
                {status === 'loading' ? 'Sending...' : <>Send Message <ArrowRight size={15} /></>}
              </button>
            </div>
          </div>

          {/* Contact info sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              { icon: <Mail size={16} />, label: 'Email', value: 'info@3dmas.in' },
              { icon: <Phone size={16} />, label: 'Phone', value: '+91 99999 99999' },
              { icon: <MapPin size={16} />, label: 'Location', value: 'Pimpri, Pune\nMaharashtra, India' },
            ].map(item => (
              <div key={item.label} style={{
                background: 'var(--dark-3)', border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '8px', padding: '24px',
                display: 'flex', alignItems: 'flex-start', gap: '16px'
              }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: 'rgba(232,65,10,0.12)', border: '1px solid rgba(232,65,10,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--primary)', flexShrink: 0
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--gray-mid)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>{item.label}</div>
                  <div style={{ fontSize: '14px', color: 'white', whiteSpace: 'pre-line' }}>{item.value}</div>
                </div>
              </div>
            ))}

            {/* Response time note */}
            <div style={{
              background: 'rgba(232,65,10,0.06)', border: '1px solid rgba(232,65,10,0.15)',
              borderRadius: '8px', padding: '20px',
              fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6
            }}>
              <span style={{ color: 'var(--primary)', fontWeight: 700 }}>Typical response time:</span> within 24 hours on business days. For urgent projects, call us directly.
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1fr 380px"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
