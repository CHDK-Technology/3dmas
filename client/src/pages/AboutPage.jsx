import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Microscope, Wrench, Ruler, ScanLine } from 'lucide-react';
import Counter from '../components/Counter.jsx';
import Media from '../components/Media.jsx';

const ease = [0.25, 0.46, 0.45, 0.94];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease, delay },
});

const EXPERTISE = [
  { icon: <Microscope size={18} />, t: 'R&D & Prototype Development', d: 'Concept-to-prototype engineering for new product development across precision-critical sectors.' },
  { icon: <Wrench size={18} />,     t: 'Jigs, Fixtures & Molds',      d: 'Design and manufacture of jigs, fixtures, composite-part molds and critical machined components.' },
  { icon: <Ruler size={18} />,      t: 'Portable CMM Measurement',    d: 'On-site coordinate measurement using laser trackers and portable measuring arms.' },
  { icon: <ScanLine size={18} />,   t: 'Scanning & Reverse Engineering', d: '3D laser scanning, CAD comparison and production-intent model reconstruction.' },
];

const STATS = [
  { to: 28000, u: 'sq ft', l: 'Total shop-floor area' },
  { to: 124,   u: 'people', l: 'Total manpower' },
  { static: '2 × 5', u: 'ton', l: 'Overhead bridge cranes' },
  { to: 140,   u: 'KVA', l: 'Generator backup' },
];

const GOALS = [
  'Providing services using the latest technology',
  'Maintaining ethical and professional business practices',
  'Providing the solution right the first time',
];

export default function AboutPage() {
  return (
    <main style={{ paddingTop: 64 }}>

      {/* HEADER */}
      <section className="section">
        <div className="wrap">
          <div className="section-head section-head--wide">
            <motion.div {...fadeUp()}>
              <p className="section-tag">About 3DMAS</p>
              <h2 className="section-h">An extended partner for India's<br />industrial growth since 2015.</h2>
              <p className="section-sub">
                3 Dimensional Measurement &amp; Solution (3DMAS) is an ISO 9001:2015 certified company bringing world-class design, manufacturing and measurement facilities under one roof. With a local presence across all four corners of India, we deliver industrial solutions for the current and future needs of manufacturing.
              </p>
            </motion.div>
          </div>

          <motion.div className="cap-grid" {...fadeUp(0.05)}>
            {EXPERTISE.map((e, i) => (
              <div className="cap-card" key={i}>
                <div className="cap-icon">{e.icon}</div>
                <h3>{e.t}</h3>
                <p>{e.d}</p>
              </div>
            ))}
          </motion.div>

          <div style={{ marginTop: 56 }}>
            <Media type="image" ratio="21/9" label="Facility / Shop Floor"
              note="Wide shot of the 28,000 sq ft facility — machining bay, bridge cranes or metrology lab." />
          </div>
        </div>
      </section>

      {/* VISION / MISSION / GOALS */}
      <section className="section section--surface section--border-top">
        <div className="wrap">
          <div className="section-head">
            <motion.div {...fadeUp()}>
              <p className="section-tag">Vision, Mission &amp; Goals</p>
              <h2 className="section-h">What we commit to.</h2>
            </motion.div>
          </div>

          <div className="sol-list">
            <motion.div className="sol-item" {...fadeUp()}>
              <div className="sol-text">
                <div className="sol-item-n">Our Vision</div>
                <h3>To be an extended partner of our clients.</h3>
                <p>Providing the latest technology services at the expected quality and cost — so our clients can treat 3DMAS as an extension of their own engineering teams.</p>
              </div>
              <div className="sol-text">
                <div className="sol-item-n">Our Mission</div>
                <h3>On-time delivery and right-first-time quality.</h3>
                <p>Timely delivery and right quality the first time are our passion — the standard against which we measure every project we take on.</p>
              </div>
            </motion.div>

            <motion.div className="sol-item" {...fadeUp(0.05)}>
              <div className="sol-text" style={{ gridColumn: '1 / -1' }}>
                <div className="sol-item-n">Our Goals</div>
                <h3>How we meet project and production needs.</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, marginTop: 4 }}>
                  {GOALS.map((g, i) => (
                    <li key={i} style={{ display: 'flex', gap: 12, fontSize: 15, color: 'var(--muted)', lineHeight: 1.7 }}>
                      <span style={{ color: 'var(--blue)', fontWeight: 700 }}>0{i + 1}</span>
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE STATS */}
      <section className="section section--navy">
        <div className="wrap">
          <motion.div {...fadeUp()}>
            <p className="section-tag section-tag--light">Infrastructure</p>
            <h2 className="section-h section-h--light">A facility built for heavy,<br />precision-critical work.</h2>
          </motion.div>

          <motion.div
            className="process-grid"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
          >
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                className="process-step"
                variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
              >
                <div style={{ fontSize: 40, fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>
                  {s.static ? s.static : <Counter to={s.to} />}
                  <span style={{ fontSize: 16, color: 'var(--blue)', marginLeft: 6 }}>{s.u}</span>
                </div>
                <p style={{ marginTop: 12 }}>{s.l}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--surface section--border-top">
        <div className="wrap">
          <motion.div className="cta-inner" style={{ maxWidth: 720 }} {...fadeUp()}>
            <h2 style={{ color: 'var(--navy)' }}>Work with a certified metrology and manufacturing partner.</h2>
            <p style={{ color: 'var(--muted)' }}>From a single inspection to a full reverse-engineering programme, our engineers are ready to support your project.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn-primary">Contact Our Team</Link>
              <Link to="/services" className="btn-secondary">Explore Services</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}