import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from '/src/img/logo.png';

const NAV_LINKS = [
  { label: 'About',      href: '/about' },
  { label: 'Services',   href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Projects',   href: '/projects' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-brand">
            <img src={logo} alt="3DMAS" className="nav-logo" />
          </Link>

          <nav className="nav-links" aria-label="Main navigation">
            {NAV_LINKS.map(l => (
              <NavLink
                key={l.label}
                to={l.href}
                className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-cta-group">
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
              <img src={logo} alt="3DMAS" className="nav-logo" style={{ height: 40 }} />
            </Link>
            <button className="nav-overlay-close" onClick={() => setOpen(false)} aria-label="Close">close</button>
          </div>
          <nav className="nav-overlay-links">
            {NAV_LINKS.map(l => (
              <NavLink key={l.label} to={l.href} className="nav-overlay-link">{l.label}</NavLink>
            ))}
            <NavLink to="/contact" className="nav-overlay-link">Contact</NavLink>
          </nav>
          <div className="nav-overlay-foot">
            <a href="mailto:info@3dmas.in">info@3dmas.in</a>
            <a href="mailto:sales@3dmas.in">sales@3dmas.in</a>
          </div>
        </div>
      )}
    </>
  );
}