import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Seo from '../components/Seo.jsx';
import ParticleBg from '../components/ParticleBg.jsx';

const ease = [0.25, 0.46, 0.45, 0.94];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease, delay },
});

const INDUSTRIES = [
  {
    n: '01',
    t: 'Aerospace & Defence',
    accent: 'Aerospace',
    d: 'Composite lay-up molds and trimming fixtures for aircraft skin parts, first-article inspection and laser-projected assembly guidance for brackets, ribs and stringers.',
    apps: ['Composite lay-up mold design & manufacture', 'First-article & lot inspection', 'Laser-projected assembly guidance', 'Dimensional verification of structures'],
  },
  {
    n: '02',
    t: 'Power & Turbines',
    accent: 'Power',
    d: 'Digital mapping and precision alignment for hydro, steam, gas, nuclear and wind turbine plants — including generator stator key-bar setting.',
    apps: ['Steam turbine digital mapping', 'Generator stator key-bar setting', 'Turbine blade & casing inspection', 'On-site alignment during planned outages'],
  },
  {
    n: '03',
    t: 'Steel & Heavy Plants',
    accent: 'Steel',
    d: 'Steel mill laser alignment, catenary and shaft alignment, structural verification and large-scale measurement for heavy fabricated assemblies.',
    apps: ['Rolling mill stand & roll alignment', 'Catenary & shaft alignment', 'Large-structure dimensional verification', 'Continuous-line laser alignment'],
  },
  {
    n: '04',
    t: 'Automotive',
    accent: 'Automotive',
    d: 'Production line building, tooling and fixture inspection, body-panel scanning and dimensional reporting for OEMs and Tier-1 suppliers.',
    apps: ['Production line building', 'Fixture & jig inspection', 'Body-panel & component scanning', 'CAD comparison & deviation analysis'],
  },
  {
    n: '05',
    t: 'Railway & Marine',
    accent: 'Railway',
    d: 'Railway construction, shipbuilding and marine fabrication measurement, road construction surveys and floor layouts for production lines.',
    apps: ['Railway track & structure measurement', 'Marine & shipbuilding fabrication', 'Road construction surveys', 'Robotic station floor layouts'],
  },
  {
    n: '06',
    t: 'Infrastructure & Bridges',
    accent: 'Infrastructure',
    d: 'Long-range 3D scanning of bridges and large civil structures using the Leica P50, followed by registration, modelling and volume calculation.',
    apps: ['Bridge scanning up to 2.5 km', 'Long-range scan with Leica P50', 'Stockpile volume calculation', 'As-built documentation'],
  },
];

export default function IndustriesPage() {
  return (
    <main>
      <Seo
        title="Industries We Serve"
        description="3DMAS delivers precision metrology and tooling to aerospace, power, steel, automotive, railway and infrastructure sectors across India."
        path="/industries"
      />

      {/* ── PAGE HERO ── */}
      <section className="ind-hero">
        <ParticleBg scanLine={true} />
        <div className="wrap ind-hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.1 }}
          >
            <p className="section-tag">Industries</p>
            <h1 className="ind-hero-h1">
              Industries<br /><span className="acc">We Serve</span>
            </h1>
          </motion.div>
          <motion.p
            className="ind-hero-sub"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.28 }}
          >
            Precision measurement, scanning and tooling tailored to the tolerances and demands of each sector.
          </motion.p>
        </div>
      </section>

      {/* ── INDUSTRIES GRID ── */}
      <section className="section">
        <div className="wrap">
          <motion.div
            className="ind-cards"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          >
            {INDUSTRIES.map((ind) => (
              <motion.div
                key={ind.n}
                className="ind-card"
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
              >
                <div className="ind-card-num">{ind.n}</div>
                <div className="ind-card-body">
                  <h2 className="ind-card-title">{ind.t}</h2>
                  <p className="ind-card-desc">{ind.d}</p>
                  <ul className="ind-card-apps">
                    {ind.apps.map((a, i) => (
                      <li key={i}>
                        <span className="ind-card-dot" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section--navy">
        <div className="wrap">
          <motion.div className="cta-inner" {...fadeUp()}>
            <h2>Have a measurement challenge in your industry?</h2>
            <p>Our engineers have delivered programmes across aerospace, power, steel and automotive. Tell us about yours.</p>
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
