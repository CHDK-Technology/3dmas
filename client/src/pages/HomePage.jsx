import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScanLine, Target, RotateCcw, Settings2, Crosshair, Layers, ArrowRight, MapPin, Building2, Users, Cpu } from 'lucide-react';
import Seo from '../components/Seo.jsx';
import Media from '../components/Media.jsx';
import Counter from '../components/Counter.jsx';

const ease = [0.25, 0.46, 0.45, 0.94];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease, delay },
});

const SERVICES = [
  { icon: <ScanLine size={18} />,  t: 'On-Site CMM Inspection',     d: 'Dimensional inspection with Leica & FARO laser trackers and FARO / ROMER portable arms — first-article and lot inspection.' },
  { icon: <Target size={18} />,    t: '3D Laser Scanning',          d: 'Handheld, blue-light and long-range scanning with GOM, FARO Focus and the Leica P50 — from components to kilometre-scale structures.' },
  { icon: <RotateCcw size={18} />, t: 'Reverse Engineering',        d: 'Production-intent CAD reconstructed from castings, dies, moulds and worn legacy components.' },
  { icon: <Settings2 size={18} />, t: 'Tool, Die & Mold Manufacturing', d: 'Composite lay-up molds, trimming jigs and vacuum clamping fixtures, machined on double-column VMCs.' },
  { icon: <Crosshair size={18} />, t: 'Laser Alignment & Mapping',  d: 'Steam turbine digital mapping, generator stator key-bar setting and laser alignment for steel, cement and paper mills.' },
  { icon: <Layers size={18} />,    t: 'R&D, Prototyping & Rental',  d: 'R&D and prototype development, jig and fixture design, plus laser tracker rental for skilled in-house teams.' },
];

const INDUSTRIES = [
  { n: '01', t: 'Aerospace & Defence', d: 'Composite molds, fixtures and first-article inspection for aerospace structures and skin parts.' },
  { n: '02', t: 'Power & Turbines',     d: 'Mapping and alignment for hydro, steam, gas, nuclear and wind turbine plants.' },
  { n: '03', t: 'Steel & Heavy Plants', d: 'Steel mill laser alignment and large-scale measurement for heavy fabricated assemblies.' },
  { n: '04', t: 'Automotive',           d: 'Line building, tooling inspection and dimensional reporting for OEMs and Tier-1 suppliers.' },
  { n: '05', t: 'Railway & Marine',     d: 'Railway, shipbuilding and marine fabrication measurement and production-line layouts.' },
];


const COMPANY_LOGOS = [
  { src: '/img/ada.png',       name: 'ADA' },
  { src: '/img/alstom.png',    name: 'Alstom' },
  { src: '/img/beml.png',      name: 'BEML' },
  { src: '/img/ge.png',        name: 'GE' },
  { src: '/img/godrej.png',    name: 'Godrej' },
  { src: '/img/hal.png',       name: 'HAL' },
  { src: '/img/isro.png',      name: 'ISRO' },
  { src: '/img/kirloskar.png', name: 'Kirloskar' },
  { src: '/img/lmw.png',       name: 'LMW' },
  { src: '/img/lt.png',        name: 'L&T' },
  { src: '/img/mahindra.png',  name: 'Mahindra' },
  { src: '/img/reliance.png',  name: 'Reliance' },
  { src: '/img/tatapower.png', name: 'Tata Power' },
  { src: '/img/solar.png',     name: 'Solar Industries' },
];
export default function HomePage() {
  return (
    <main>
      <Seo
        title="Precision 3D Metrology & Measurement"
        description="ISO 9001:2015 certified metrology partner — on-site CMM inspection, 3D laser scanning, reverse engineering and precision tooling for aerospace, power, steel and automotive industries across India."
        path="/"
      />

      {/* 1 - HERO */}
      <section className="hero">
        <div className="hero-grid-overlay" aria-hidden="true" />

        {/* top-left badge */}
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.2 }}
        >
          <span className="hero-badge-dot" />ISO 9001:2015 Certified
        </motion.div>

        {/* bottom-left title card */}
        <div className="hero-body-wrap">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.1 }}
          >
            <div className="hero-eyebrow">Precision Metrology &amp; Manufacturing</div>
            <h1 className="hero-h1">
              Precision<br /><span className="acc">That Performs</span>
            </h1>
            <div className="hero-actions">
              <Link to="/services" className="btn-primary">Explore Services <ArrowRight size={15} /></Link>
              <Link to="/contact" className="btn-outline-white">Contact Us</Link>
            </div>
          </motion.div>
        </div>

        {/* logos scroll inside hero — float over the photo, no strip */}
        <div className="hero-logos" aria-label="Companies we work with">
          <div className="logo-marquee-track">
            {[0, 1].map((set) => (
              <div className="logo-marquee-set" key={set}>
                {COMPANY_LOGOS.map((logo, i) => (
                  <div className="logo-marquee-item" key={i}>
                    <img src={logo.src} alt={logo.name} loading="lazy" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STAT BAND */}
      <section className="section section--surface bg-grid" style={{ paddingTop: 48, paddingBottom: 72 }}>
        <div className="wrap">
          <motion.div className="statband" {...fadeUp()}>
            <div className="stat-cell">
              <div className="stat-num"><Counter to={2015} group={false} /></div>
              <div className="stat-lbl">Established — pan-India presence</div>
            </div>
            <div className="stat-cell">
              <div className="stat-num"><Counter to={28000} /><span className="u">sq ft</span></div>
              <div className="stat-lbl">Manufacturing &amp; metrology facility</div>
            </div>
            <div className="stat-cell">
              <div className="stat-num"><Counter to={124} /><span className="u">+</span></div>
              <div className="stat-lbl">Engineers, machinists &amp; specialists</div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">ISO<span className="u">9001:2015</span></div>
              <div className="stat-lbl">Certified quality management</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2 - CAPABILITIES (teaser -> /services) */}
      <section className="section section--surface">
        <div className="wrap">
          <div className="section-head">
            <motion.div {...fadeUp()}>
              <p className="section-tag">What We Do</p>
              <h2 className="section-h">Measurement and manufacturing<br />under one roof.</h2>
              <p className="section-sub">Six core capabilities covering the complete metrology workflow - explore the full equipment list and process on the services page.</p>
            </motion.div>
          </div>
          <motion.div
            className="cap-grid"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          >
            {SERVICES.map((s, i) => (
              <motion.div
                key={i}
                className="cap-card"
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
              >
                <div className="cap-icon">{s.icon}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div {...fadeUp(0.1)} style={{ marginTop: 36 }}>
            <Link to="/services" className="btn-secondary">View all services <ArrowRight size={15} /></Link>
          </motion.div>
        </div>
      </section>

      {/* 3 - INDUSTRIES (teaser -> /industries) */}
      <section className="section section--border-top">
        <div className="wrap">
          <div className="section-head">
            <motion.div {...fadeUp()}>
              <p className="section-tag">Industries</p>
              <h2 className="section-h">Serving precision-critical industries.</h2>
            </motion.div>
          </div>
          <motion.div className="ind-list" {...fadeUp(0.05)}>
            {INDUSTRIES.map((ind) => (
              <div className="ind-item" key={ind.n}>
                <div className="ind-n">{ind.n}</div>
                <div className="ind-t">{ind.t}</div>
                <p className="ind-d">{ind.d}</p>
              </div>
            ))}
          </motion.div>
          <motion.div {...fadeUp(0.1)} style={{ marginTop: 36 }}>
            <Link to="/industries" className="btn-secondary">Industries &amp; applications <ArrowRight size={15} /></Link>
          </motion.div>
        </div>
      </section>

      {/* 4 - CTA */}
      <section className="section section--navy">
        <div className="wrap">
          <motion.div
            className="cta-inner"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease }}
          >
            <h2>Ready to discuss your measurement requirements?</h2>
            <p>Our engineers will review your project scope and provide a detailed quotation within 24 hours.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn-primary">Contact Our Team</Link>
              <Link to="/projects" className="btn-outline-white">View Our Work</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}