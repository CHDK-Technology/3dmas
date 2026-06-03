import logo from '/src/img/logo.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-top">

          <div className="foot-brand">
            <img src={logo} alt="3DMAS" className="foot-brand-logo" style={{ height: 60, width: 'auto', alignSelf: 'flex-start', filter: 'none', opacity: 1 }} />
            <p className="foot-brand-desc">
              ISO 9001:2015 certified metrology and precision manufacturing. Serving aerospace, automotive, power and infrastructure sectors across India.
            </p>
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
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/industries">Industries</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>Locations</h4>
            <ul>
              <li>Balewadi, Pune 411045 (HQ)</li>
              <li>Manjusar, Vadodara 391775</li>
              <li>Regional offices across India: Ahmedabad, Surat, Bengaluru, Bhopal, Chennai, Gurugram, Jaipur, Chakradharpur &amp; Karanjia</li>
            </ul>
          </div>

        </div>

        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} 3DMAS — 3 Dimensional Measurement &amp; Solution</span>
          <div className="foot-socials">
            <a href="https://www.3dmas.in" target="_blank" rel="noreferrer">3dmas.in</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}