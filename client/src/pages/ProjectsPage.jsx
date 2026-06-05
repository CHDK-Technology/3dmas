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

const PROJECTS = [
  { tag: 'Aerospace',      t: 'LCACT Skin-Part Layup Molds',         d: 'Design and manufacture of composite lay-up molds and trimming fixtures for LCACT aircraft skin parts, machined on double-column VMC and CMM-verified.' },
  { tag: 'Aerospace',      t: 'Aerospace Layup Tools',               d: 'Production tooling and new product development (NPD) for aerospace composite components, from design through inspection.' },
  { tag: 'Power',          t: 'Steam Turbine Digital Mapping',       d: 'On-site digital mapping of steam turbines using laser trackers during planned outages for power generation facilities.' },
  { tag: 'Power',          t: 'Stator Key-Bar Setting',             d: 'Steam and hydro generator stator key-bar setting and validation using high-accuracy laser tracker measurement.' },
  { tag: 'Steel',          t: 'Steel Mill Laser Alignment',         d: 'Precision laser alignment of steel mill stands and rolls, including catenary and shaft alignment for continuous lines.' },
  { tag: 'Process',        t: 'Cement, Printing & Paper Mill Alignment', d: 'Multi-coupling shaft alignment and live-move correction for cement mills, printing machines and paper mills.' },
  { tag: 'Infrastructure', t: '2.5 km Bridge Scan — Leica P50',      d: 'Long-range 3D scanning of a 2.5 km bridge with the Leica P50 (1 km range) scanner, followed by registration and modelling.' },
  { tag: 'Scanning',       t: 'Volume Calculation from Scan Data',   d: 'Scan-to-mesh workflows for stockpile and component volume calculation, delivering accurate volumetric reports from point-cloud data.' },
  { tag: 'Reverse Eng.',   t: 'Scan-to-CAD Reconstruction',         d: 'Reverse engineering of castings, dies, moulds and legacy components into production-intent CAD using blue-light and laser scanning.' },
];

export default function ProjectsPage() {
  return (
    <main style={{ paddingTop: 64 }}>
      <Seo
        title="Projects & Capabilities"
        description="A look at the precision measurement, 3D scanning, reverse engineering and tooling projects 3DMAS delivers across Indian industry."
        path="/projects"
      />

      {/* HEADER + PROJECTS */}
      <section className="section">
        <div className="wrap">
          <div className="section-head section-head--wide">
            <motion.div {...fadeUp()}>
              <p className="section-tag">Projects</p>
              <h2 className="section-h">Selected project work<br />and specializations.</h2>
              <p className="section-sub">
                A representative sample of the measurement, scanning, alignment and tooling work 3DMAS has delivered across aerospace, power, steel and infrastructure.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="proj-grid"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          >
            {PROJECTS.map((p, i) => (
              <motion.div
                key={i}
                className="proj-card"
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
              >
                <Media type="image" ratio="16/9" label={p.t} note={`Photo of the ${p.tag.toLowerCase()} project`} />
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

      {/* CTA */}
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