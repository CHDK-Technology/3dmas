import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScanLine, Target, RotateCcw, Settings2, Crosshair, Layers, ArrowRight } from 'lucide-react';
import Media from '../components/Media.jsx';
import HeroCanvas from '../components/HeroCanvas.jsx';
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

const TICKER_TEXT = 'CMM INSPECTION · 3D LASER SCANNING · REVERSE ENGINEERING · DIMENSIONAL AUDIT · LASER ALIGNMENT · COMPOSITE TOOLING · DIGITAL MAPPING · PRECISION MANUFACTURING · ';

export default function HomePage() {
  return (
    <main>

      {/* 1 - HERO */}
      <section className="hero">
        <HeroCanvas />
        <div className="hero-body-wrap">
          <motion.div
            className="hero-intro"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
          >
            <p className="hero-tag">ISO 9001:2015 Certified</p>
            <p>
              3DMAS is a 3-dimensional measurement &amp; solution company - delivering on-site inspection, 3D laser scanning, reverse engineering and precision tooling across India since 2015.
            </p>
          </motion.div>

          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.12 }}
          >
            <h1 className="hero-h1">
              Precision<br />That <span className="acc">Performs</span>
            </h1>
            <div className="hero-actions">
              <Link to="/services" className="btn-primary">Explore Services</Link>
              <Link to="/contact" className="btn-outline-white">Contact Us</Link>
            </div>
          </motion.div>
        </div>

        <div className="hero-meta wrap">
          <div className="hero-meta-item">
            <span className="hero-meta-item-dot" />
            <span className="hero-meta-text">Established 2015 - Pune HQ, pan-India presence</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-item-dot" />
            <span className="hero-meta-text">28,000 sq ft facility - 124 specialists</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-item-dot" />
            <span className="hero-meta-text">Leica - FARO - GOM - ROMER - ScanTech</span>
          </div>
        </div>

        <div className="hero-cue" aria-hidden="true">
          <span>Scroll</span>
          <span className="hero-cue-line" />
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>{TICKER_TEXT}</span>
          <span>{TICKER_TEXT}</span>
        </div>
      </div>

      {/* STAT BAND */}
      <section className="section section--surface bg-grid" style={{ paddingTop: 72, paddingBottom: 72 }}>
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

      {/* VIDEO BAND - 3DMAS in action */}
      <section className="section section--surface section--border-top video-band">
        <div className="wrap">
          <div className="section-head">
            <motion.div {...fadeUp()}>
              <p className="section-tag">3DMAS In Action</p>
              <h2 className="section-h">Precision work, on-site and in-house.</h2>
              <p className="section-sub">A short look at laser tracking, 3D scanning and tooling across the projects we deliver.</p>
            </motion.div>
          </div>
          <Media type="video" ratio="16/9" label="Showreel / Process"
            note="Short muted loop: laser tracking, scanning or machining. Add /src/img/showreel.mp4 (+ poster)." />
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