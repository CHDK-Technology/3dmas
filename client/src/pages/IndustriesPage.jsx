import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Media from '../components/Media.jsx';
import Seo from '../components/Seo.jsx';

const ease = [0.25, 0.46, 0.45, 0.94];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease, delay },
});

const INDUSTRIES = [
  { n: '01', t: 'Aerospace & Defence',  d: 'Composite lay-up molds and trimming fixtures for aircraft skin parts, layup tools, first-article inspection and laser-projected assembly guidance for brackets, ribs and stringers.' },
  { n: '02', t: 'Power & Turbines',     d: 'Digital mapping and alignment for hydro, steam, gas, nuclear and wind turbine plants — including steam turbine digital mapping and generator stator key-bar setting.' },
  { n: '03', t: 'Steel & Heavy Plants', d: 'Steel mill laser alignment, catenary and shaft alignment, structural verification and large-scale measurement for heavy fabricated assemblies.' },
  { n: '04', t: 'Automotive',           d: 'Production line building, tooling and fixture inspection, body-panel scanning and dimensional reporting for OEMs and Tier-1 suppliers.' },
  { n: '05', t: 'Railway & Marine',     d: 'Railway construction, shipbuilding and marine fabrication measurement, road construction surveys and floor layouts for production lines and robotic stations.' },
];

const PORTABLE_CMM = [
  'On-site inspection of gauges, fixtures, jigs and fabricated structures',
  'Fixture and jig setting per CAD model and drawing, with validation and calibration',
  'Inspection of casting parts, machined parts and moulds',
  'First-article inspection and lot inspection',
  'Reverse engineering and 3D modelling of plastic parts, castings, dies and gauges',
  'CAD model comparison with probing and scanning',
];

const LASER_TRACKER = [
  'Automobile line building and heavy equipment fabrication',
  'Railway construction, shipbuilding and marine construction',
  'Aerospace structures and assemblies',
  'Wind, hydro, steam and gas turbines, and steel mills',
  'Road construction and floor layout of production lines and robotic stations',
  'Steam turbine digital mapping and generator stator key-bar setting',
  'Steel mill, printing machine and paper mill alignment',
  'Various large-size measurements and validations',
];

function AppList({ title, items }) {
  return (
    <div>
      <div className="sol-item-n">{title}</div>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, marginTop: 4 }}>
        {items.map((it, i) => (
          <li key={i} style={{ display: 'flex', gap: 12, fontSize: 14.5, color: 'var(--muted)', lineHeight: 1.65 }}>
            <span style={{ color: 'var(--blue)', fontWeight: 700, flexShrink: 0 }}>→</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function IndustriesPage() {
  return (
    <main style={{ paddingTop: 64 }}>
      <Seo
        title="Industries We Serve"
        description="3DMAS delivers precision metrology and tooling to aerospace, automotive, power generation, steel and infrastructure sectors across India."
        path="/industries"
      />

      {/* HEADER + INDUSTRIES */}
      <section className="section">
        <div className="wrap">
          <div className="section-head section-head--wide">
            <motion.div {...fadeUp()}>
              <p className="section-tag">Industries</p>
              <h2 className="section-h">Serving precision-critical<br />industries across India.</h2>
              <p className="section-sub">
                3DMAS supports aerospace, power, steel, automotive, railway and marine sectors with measurement, scanning, reverse engineering and tooling tailored to each industry's tolerances.
              </p>
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

          <div style={{ marginTop: 56 }}>
            <Media type="image" ratio="21/9" label="On-Site Across Industries"
              note="Field work at a power plant, steel mill, aerospace shop or automotive line." />
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="section section--surface section--border-top">
        <div className="wrap">
          <div className="section-head">
            <motion.div {...fadeUp()}>
              <p className="section-tag">Applications</p>
              <h2 className="section-h">Where our equipment goes to work.</h2>
            </motion.div>
          </div>

          <motion.div
            className="sol-item"
            style={{ borderTop: 'none', paddingTop: 0 }}
            {...fadeUp(0.05)}
          >
            <AppList title="Portable CMM — FARO & ROMER Arms" items={PORTABLE_CMM} />
            <AppList title="Laser Tracker Applications" items={LASER_TRACKER} />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--navy">
        <div className="wrap">
          <motion.div className="cta-inner" {...fadeUp()}>
            <h2>Have a measurement challenge in your industry?</h2>
            <p>Our engineers have delivered measurement and tooling programmes across aerospace, power, steel and automotive. Tell us about yours.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn-primary">Contact Our Team</Link>
              <Link to="/projects" className="btn-outline-white">View Projects</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}