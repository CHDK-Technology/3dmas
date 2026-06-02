import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/src/img/logo.png';

const NAV_LINKS = [
  { label: 'About',     href: '/about' },
  { label: 'Services',  href: '/services' },
  { label: 'Industries',href: '/industries' },
  { label: 'Projects',  href: '/projects' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <Link to="/" className="nav-brand">
            <img src={logo} alt="3DMAS" className="nav-logo" />
            <span className="nav-divider" />
            <div>
              <div className="nav-brand-name">3DMAS</div>
              <div style={{ fontSize: 9, color: 'var(--muted-2)', letterSpacing: '.8px', textTransform: 'uppercase' }}>
                Measurement &amp; Solution
              </div>
            </div>
          </Link>

          <nav className="nav-links" aria-label="Main navigation">
            {NAV_LINKS.map(l => (
              <Link key={l.label} to={l.href} className="nav-link">{l.label}</Link>
            ))}
          </nav>

          <div className="nav-cta-group">
            <a href="tel:+919687620011" className="nav-phone">+91 96876 20011</a>
            <Link to="/contact" className="btn-nav">Contact Us</Link>
          </div>

          <button className="nav-burger" onClick={() => setOpen(true)} aria-label="Open menu">
            <span /><span /><span />
          </button>
        </div>
      </header>

      {open && (
        <div className="nav-overlay" role="dialog" aria-modal="true">
          <div className="nav-overlay-head">
            <Link to="/" className="nav-brand">
              <img src={logo} alt="3DMAS" className="nav-logo" />
              <span className="nav-brand-name">3DMAS</span>
            </Link>
            <button className="nav-overlay-close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
          </div>
          <nav className="nav-overlay-links">
            {NAV_LINKS.map(l => (
              <Link key={l.label} to={l.href} className="nav-overlay-link">{l.label}</Link>
            ))}
            <Link to="/contact" className="nav-overlay-link">Contact</Link>
          </nav>
          <div className="nav-overlay-foot">
            <a href="tel:+919687620011">+91 96876 20011</a>
            <a href="mailto:info@3dmas.in">info@3dmas.in</a>
          </div>
        </div>
      )}
    </>
  );
}
