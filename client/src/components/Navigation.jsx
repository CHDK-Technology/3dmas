import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/img/logo.png';
const links = [
  { label: 'About Us', href: '/' },
  { label: 'Products', href: '/' },
  { label: 'Services', href: '/' },
  { label: 'Our Projects', href: '/' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Navigation() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`nav${solid ? ' solid' : ''}`}>
        <div className="nav-inner">
<img
  src={logo}
  alt="3DMAS"
  style={{
    width: '80px',
    height: 'auto'
  }}
/>
          <div className="nav-links">
            {links.map((l) => <Link key={l.label} to={l.href}>{l.label}</Link>)}
          </div>
          <button className="burger" onClick={() => setOpen(true)}>Menu</button>
        </div>
      </nav>

      {open && (
        <div className="mobile-menu">
          <button className="close" onClick={() => setOpen(false)}>Close</button>
          {links.map((l) => (
            <Link key={l.label} to={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
        </div>
      )}
    </>
  );
}
