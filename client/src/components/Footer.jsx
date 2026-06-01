import logo from '/src/img/logo.png';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-top">
          <div>
            <p className="foot-cta">Bring us your toughest tolerance.</p>
          </div>

          <div className="foot-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:info@3dmas.in">info@3dmas.in</a></li>
              <li><a href="mailto:sales@3dmas.in">sales@3dmas.in</a></li>
              <li><a href="tel:+919687620011">+91 96876 20011</a></li>
              <li><a href="tel:+919975065096">+91 99750 65096</a></li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>Studio</h4>
            <ul>
              <li>Pune — Corporate &amp; Works</li>
              <li>Balewadi, Pune 411045</li>
              <li>Vadodara — Works</li>
              <li>Manjusar, Vadodara 391775</li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Logo size={26} />
            <span>© {new Date().getFullYear()} 3DMAS — 3 Dimensional Measurement &amp; Solution</span>
          </div>
          <div className="socials">
            <a href="https://www.3dmas.in" target="_blank" rel="noreferrer">www.3dmas.in</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
