import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Media from '../components/Media.jsx';
import Seo from '../components/Seo.jsx';
import BlobBg from '../components/BlobBg.jsx';

const ease = [0.25, 0.46, 0.45, 0.94];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease, delay },
});

const PROJECTS = [
  { tag: 'Aerospace',      img: null,                             t: 'LCACT Skin-Part Layup Molds',          d: 'Design and manufacture of composite lay-up molds and trimming fixtures for LCACT aircraft skin parts, machined on double-column VMC and CMM-verified.' },
  { tag: 'Aerospace',      img: null,                             t: 'Aerospace Layup Tools',                d: 'Production tooling and new product development (NPD) for aerospace composite components, from design through inspection.' },
  { tag: 'Power',          img: '/img/proj-steam-turbine.jpg',    t: 'Steam Turbine Digital Mapping',        d: 'On-site digital mapping of steam turbines using laser trackers during planned outages for power generation facilities.' },
  { tag: 'Power',          img: '/img/proj-stator-keybars.jpg',   t: 'Stator Key-Bar Setting',               d: 'Steam and hydro generator stator key-bar setting and validation using high-accuracy laser tracker measurement.' },
  { tag: 'Steel',          img: '/img/proj-steel-mill.jpg',       t: 'Steel Mill Laser Alignment',           d: 'Precision laser alignment of steel mill stands and rolls, including catenary and shaft alignment for continuous lines.' },
  { tag: 'Process',        img: '/img/proj-shaft-alignment.jpg',  t: 'Cement, Printing & Paper Mill Alignment', d: 'Multi-coupling shaft alignment and live-move correction for cement mills, printing machines and paper mills.' },
  { tag: 'Infrastructure', img: null,                             t: '2.5 km Bridge Scan — Leica P50',       d: 'Long-range 3D scanning of a 2.5 km bridge with the Leica P50 (1 km range) scanner, followed by registration and modelling.' },
  { tag: 'Scanning',       img: '/img/proj-volume-calc.jpg',      t: 'Volume Calculation from Scan Data',    d: 'Scan-to-mesh workflows for stockpile and component volume calculation, delivering accurate volumetric reports from point-cloud data.' },
  { tag: 'Reverse Eng.',   img: null,                             t: 'Scan-to-CAD Reconstruction',          d: 'Reverse engineering of castings, dies, moulds and legacy components into production-intent CAD using blue-light and laser scanning.' },
];

const STATS = [
  { n: '124+', l: 'Engineers & specialists' },
  { n: '28K',  l: 'sq ft facility' },
  { n: '9+',   l: 'Years delivering projects' },
  { n: '50+',  l: 'Active instruments' },
];

export default function ProjectsPage() {
  return (
    <main>
      <Seo
        title="Projects & Capabilities"
        description="A look at the precision measurement, 3D scanning, reverse engineering and tooling projects 3DMAS delivers across Indian industry."
        path="/projects"
      />

      {/* ── PAGE HERO ── */}
      <section className="ind-hero">
        <div className="wrap ind-hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.1 }}
          >
            <p className="section-tag">Projects</p>
            <h1 className="ind-hero-h1">
              Selected<br /><span className="acc">Project Work</span>
            </h1>
          </motion.div>
          <motion.p
            className="ind-hero-sub"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.28 }}
          >
            Measurement, scanning, alignment and tooling delivered across aerospace, power, steel and infrastructure.
          </motion.p>
        </div>
      </section>

      {/* ── STAT STRIP ── */}
      <div className="proj-statstrip">
        {STATS.map((s, i) => (
          <div className="proj-stat" key={i}>
            <span className="proj-stat-n">{s.n}</span>
            <span className="proj-stat-l">{s.l}</span>
          </div>
        ))}
      </div>

      {/* ── PROJECT GRID ── */}
      <section className="section">
        <div className="wrap">
          <motion.div
            className="proj-grid-v2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          >
            {PROJECTS.map((p, i) => (
              <motion.div
                key={i}
                className="proj-card-v2"
                variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.42 } } }}
              >
                <div className="proj-card-v2-media">
                  {p.img
                    ? <img src={p.img} alt={p.t} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    : <Media type="image" ratio="16/9" label={p.t} note={`Photo coming soon`} />
                  }
                </div>
                <div className="proj-card-v2-body">
                  <span className="proj-card-v2-tag">{p.tag}</span>
                  <h3 className="proj-card-v2-title">{p.t}</h3>
                  <p className="proj-card-v2-desc">{p.d}</p>
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
            <h2>Ready to discuss your measurement requirements?</h2>
            <p>Our engineers will review your project scope and provide a detailed quotation. Send us your drawings, tolerances and timeline.</p>
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
