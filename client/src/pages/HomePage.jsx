import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScanLine, Target, RotateCcw, Settings2, Crosshair, Layers } from 'lucide-react';
import ClientLogos from '../components/ClientLogos.jsx';

const ease = [0.25, 0.46, 0.45, 0.94];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease, delay },
});

const SERVICES = [
  { icon: <ScanLine size={18} />, t: 'Dimensional Inspection',     d: 'On-site CMM inspection with Leica & FARO laser trackers and Romer portable arms — first-article and lot inspection across large fabricated structures.' },
  { icon: <Target size={18} />,   t: '3D Laser Scanning',          d: 'Long-range and blue-light scanning with Leica P50, GOM and FARO Focus — from handheld components to kilometre-scale structures.' },
  { icon: <RotateCcw size={18} />, t: 'Reverse Engineering',       d: 'Production-ready CAD reconstructed from castings, dies, moulds and worn legacy components, delivered to customer-specified tolerances.' },
  { icon: <Settings2 size={18} />, t: 'Tool & Mold Manufacturing', d: 'Composite lay-up molds, trimming jigs and vacuum clamping fixtures, machined on double-column VMCs and verified in-house.' },
  { icon: <Crosshair size={18} />, t: 'Laser Alignment & Mapping',  d: 'Steam turbine digital mapping, generator stator key-bar setting, and precision laser alignment for steel and paper mills.' },
  { icon: <Layers size={18} />,   t: 'Metrology Consulting',        d: 'Measurement system analysis (MSA), GD&T training, process improvement and on-site calibration programs for manufacturing teams.' },
];

const INDUSTRIES = [
  { n: '01', t: 'Aerospace & Defence', d: 'First-article inspection, jig verification and dimensional audit for aerospace structures and components.' },
  { n: '02', t: 'Automotive & EV',     d: 'Body-in-white scanning, tooling inspection and dimensional reporting for OEMs and Tier-1 suppliers.' },
  { n: '03', t: 'Energy & Power',       d: 'Turbine mapping, generator alignment and outage measurement services for power generation facilities.' },
  { n: '04', t: 'Heavy Engineering',    d: 'Structural verification, reverse engineering and alignment for large fabricated assemblies and plant equipment.' },
  { n: '05', t: 'Oil & Gas',            d: 'Flange alignment, piping inspection and equipment mapping for upstream and downstream infrastructure.' },
];

const SOLUTIONS = [
  {
    n: '01',
    t: 'Reduce measurement uncertainty across your supply chain.',
    body: 'Unresolved measurement uncertainty at any stage — from raw castings to final assembly — becomes a cost, a delay, or a warranty claim. 3DMAS provides traceable, documented measurement data that your quality team and customers can act on.',
    img: 'Metrology engineer using CMM arm on a large forged component. Clear datum references visible. Professional facility environment.',
  },
  {
    n: '02',
    t: 'Accelerate reverse engineering without legacy documentation.',
    body: 'When OEM drawings no longer exist — or never existed — our engineers reconstruct production-intent CAD from the physical component using structured light and laser scanning. The result is a parametric model ready for tooling, casting or machining.',
    img: 'Close-up of 3D scan data overlay on physical component. Point cloud on screen in background. Clean technical environment.',
  },
];

const PROJECTS = [
  { tag: 'Aerospace',   t: 'Wing Spar Jig Verification',      d: 'Full dimensional audit of a 14-metre aircraft wing assembly jig using a Leica AT960 laser tracker.' },
  { tag: 'Power',       t: 'Steam Turbine Digital Mapping',    d: 'Rotor and casing digital mapping during a planned outage for a 250 MW power plant in Gujarat.' },
  { tag: 'Automotive',  t: 'Body Panel Reverse Engineering',   d: 'Scan-to-CAD reconstruction of legacy hood and door panels for a commercial vehicle OEM.' },
];

const PROCESS = [
  { n: '01', t: 'Discovery',   d: 'We review your drawings, tolerances, and site conditions before mobilisation. No assumptions, no surprises.' },
  { n: '02', t: 'Measurement', d: 'Certified engineers execute the measurement plan on-site or at our facility using calibrated equipment.' },
  { n: '03', t: 'Engineering', d: 'Data is processed, compared to nominal, and compiled into a structured report or CAD deliverable.' },
  { n: '04', t: 'Delivery',    d: 'Reports delivered in your required format — PDF, Excel, PolyWorks, CATIA, or Siemens NX.' },
];

const TICKER_TEXT = 'CMM INSPECTION · 3D LASER SCANNING · REVERSE ENGINEERING · DIMENSIONAL AUDIT · LASER ALIGNMENT · COMPOSITE TOOLING · METROLOGY CONSULTING · PRECISION MANUFACTURING · ';

function MediaPh({ label, note, ratio }) {
  return (
    <div className="media-ph" style={{ aspectRatio: ratio || '4/3' }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <div className="media-ph-label">{label}</div>
      {note && <p className="media-ph-note">{note}</p>}
    </div>
  );
}

export default function HomePage() {
  return (
    <main>

      {/* 1 ── HERO */}
      <section className="hero">
        <div className="hero-body-wrap">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
          >
            <p className="hero-tag">ISO 9001:2015 Certified</p>
            <h1 className="hero-h1">
              Engineering-Grade<br />Measurement Solutions
            </h1>
            <p className="hero-desc">
              CMM inspection, 3D laser scanning, reverse engineering and precision tooling — delivered by certified metrology engineers across India.
            </p>
            <div className="hero-actions">
              <Link to="/services" className="btn-primary">Explore Services</Link>
              <Link to="/contact" className="btn-secondary">Contact Us</Link>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <MediaPh
              label="Hero Image"
              ratio="4/3"
              note="Professional engineer operating a FARO or Leica laser tracker on an industrial component. Facility environment, sharp focus, no stock imagery."
            />
          </motion.div>
        </div>

        <div className="hero-meta wrap">
          <div className="hero-meta-item">
            <span className="hero-meta-item-dot" />
            <span className="hero-meta-text">Established 2015 — Pune &amp; Vadodara</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-item-dot" />
            <span className="hero-meta-text">28,000 sq ft manufacturing &amp; metrology facility</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-item-dot" />
            <span className="hero-meta-text">Leica · FARO · GOM · Renishaw instrumentation</span>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>{TICKER_TEXT}</span>
          <span>{TICKER_TEXT}</span>
        </div>
      </div>

      {/* 2 ── CAPABILITIES */}
      <section className="section section--surface">
        <div className="wrap">
          <div className="section-head">
            <motion.div {...fadeUp()}>
              <p className="section-tag">Capabilities</p>
              <h2 className="section-h">Full-spectrum measurement<br />and manufacturing services.</h2>
              <p className="section-sub">From a single first-article inspection to a multi-phase reverse engineering programme — our capabilities cover the complete metrology workflow.</p>
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
                <Link to="/services" className="cap-card-link">View details →</Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3 ── INDUSTRIES */}
      <section className="section section--border-top">
        <div className="wrap">
          <div className="section-head">
            <motion.div {...fadeUp()}>
              <p className="section-tag">Industries</p>
              <h2 className="section-h">Serving precision-critical industries.</h2>
            </motion.div>
          </div>
          <motion.div
            className="ind-list"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
          >
            {INDUSTRIES.map((ind) => (
              <motion.div
                key={ind.n}
                className="ind-item"
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }}
              >
                <div className="ind-n">{ind.n}</div>
                <div className="ind-t">{ind.t}</div>
                <p className="ind-d">{ind.d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4 ── SOLUTIONS */}
      <section className="section section--surface section--border-top">
        <div className="wrap">
          <div className="section-head">
            <motion.div {...fadeUp()}>
              <p className="section-tag">Solutions</p>
              <h2 className="section-h">Measurement intelligence<br />for engineering decisions.</h2>
            </motion.div>
          </div>
          <div className="sol-list">
            {SOLUTIONS.map((sol, i) => (
              <motion.div
                key={i}
                className={`sol-item${i % 2 !== 0 ? ' sol-item--rev' : ''}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease }}
              >
                <div className="sol-text">
                  <div className="sol-item-n">Solution {sol.n}</div>
                  <h3>{sol.t}</h3>
                  <p>{sol.body}</p>
                  <Link to="/contact" className="btn-primary">Discuss your project</Link>
                </div>
                <div className="sol-media">
                  <MediaPh label={`Solution ${sol.n} Image`} ratio="4/3" note={sol.img} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 ── PROJECT SHOWCASE */}
      <section className="section section--border-top">
        <div className="wrap">
          <div className="section-head">
            <motion.div {...fadeUp()}>
              <p className="section-tag">Projects</p>
              <h2 className="section-h">Selected project work.</h2>
              <p className="section-sub">A representative sample of measurement and engineering projects delivered across India.</p>
            </motion.div>
          </div>
          <motion.div
            className="proj-grid"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          >
            {PROJECTS.map((p, i) => (
              <motion.div
                key={i}
                className="proj-card"
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
              >
                <div className="proj-card-img">
                  <MediaPh
                    label="Project Image"
                    ratio="16/9"
                    note={`${p.tag} — ${p.t}. Show actual scan data, equipment in use, or inspection report output.`}
                  />
                </div>
                <div className="proj-card-body">
                  <div className="proj-tag">{p.tag}</div>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6 ── PROCESS */}
      <section className="section section--navy">
        <div className="wrap">
          <motion.div {...fadeUp()}>
            <p className="section-tag section-tag--light">How we work</p>
            <h2 className="section-h section-h--light">A structured delivery model<br />built for engineering environments.</h2>
          </motion.div>
          <motion.div
            className="process-grid"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
          >
            {PROCESS.map((step) => (
              <motion.div
                key={step.n}
                className="process-step"
                variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
              >
                <div className="process-n">{step.n}</div>
                <h3>{step.t}</h3>
                <p>{step.d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7 ── TRUST */}
      <section className="section section--surface section--border-top">
        <div className="wrap">
          <motion.div {...fadeUp()}>
            <ClientLogos />
          </motion.div>
        </div>
      </section>

      {/* 8 ── CTA */}
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
            <p>Our engineers are available to review your project scope and provide a detailed quotation within 24 hours.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn-primary">Contact Our Team</Link>
              <a href="tel:+919687620011" className="btn-outline-white">+91 96876 20011</a>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
