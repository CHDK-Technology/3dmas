import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const choice = localStorage.getItem('3dmas-cookie-consent');
      if (!choice) setVisible(true);
    } catch (e) { /* localStorage unavailable — skip banner rather than break the page */ }
  }, []);

  const choose = (value) => {
    try { localStorage.setItem('3dmas-cookie-consent', value); } catch (e) {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <div className="cookie-banner-text">
        We use cookies to run this site and, with your consent, to understand how it's used.
        See our <Link to="/cookie-policy">Cookie Policy</Link> for details.
      </div>
      <div className="cookie-banner-actions">
        <button className="btn-outline-white" onClick={() => choose('declined')}>Decline</button>
        <button className="btn-primary" onClick={() => choose('accepted')}>Accept</button>
      </div>
    </div>
  );
}
