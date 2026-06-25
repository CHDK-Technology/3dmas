import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScanLine, Target, RotateCcw, Settings2, Crosshair, Layers } from 'lucide-react';
import Seo from '../components/Seo.jsx';

const ease = [0.25, 0.46, 0.45, 0.94];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease, delay },
});

const SERVICES = [
  { icon: <ScanLine size={18} />,  t: 'On-Site CMM Inspection',     d: 'Professional dimensional inspection using Leica and FARO laser trackers and FARO / ROMER portable arms — first-article inspection, lot inspection and validation of gauges, fixtures, jigs and fabricated structures.' },
  { icon: <Target size={18} />,    t: '3D Laser Scanning',          d: 'Handheld, blue-light and long-range scanning with GOM, FARO Focus and the Leica P50 (1 km range) — followed by CAD comparison, mesh generation and volume calculation.' },
  { icon: <RotateCcw size={18} />, t: 'Reverse Engineering',        d: '3D modelling and production-intent CAD reconstruction of plastic parts, castings, dies, moulds and relation gauges using probing and scanning.' },
  { icon: <Settings2 size={18} />, t: 'Tool, Die & Mold Manufacturing', d: 'Composite-part lay-up molds, trimming fixtures and vacuum clamping fixtures, machined on double-column VMCs and verified in-house against customer drawings.' },
  { icon: <Crosshair size={18} />, t: 'Laser Alignment & Mapping',  d: 'Steam turbine digital mapping, steam & hydro generator stator key-bar setting, shaft alignment, and precision laser alignment for steel, cement, printing and paper mills.' },
  { icon: <Layers size={18} />,    t: 'Equipment Rental',           d: 'Laser tracker rental for customers who have in-house expertise and experience in operating the equipment, supported by our professionals.' },
];

const INSPECTION_EQUIPMENT = [
  { m: 'Leica Laser Tracker AT960', s: ['Range 80 m · +T Probe', 'Accuracy ±15 µm + 6 µm/m', 'Polyworks & Spatial Analyzer'] },
  { m: 'Leica Laser Tracker AT401 / 402 / 403', s: ['5 units · Range 320 m', 'Accuracy ±15 µm + 6 µm/m', 'B-Probe ±35 µm'] },
  { m: 'Leica P50 Long-Range Scanner', s: ['Range up to 1 km', '1,000,000 points / sec', 'Cyclone 3D / 3DR / Register'] },
  { m: 'FARO Vantage E Laser Tracker', s: ['2 units · Range 80 m', 'Accuracy ±16 µm + 0.8 µm/m', 'Polyworks, SA, CAM2'] },
  { m: 'FARO Quantum E Arm — 2.5 m', s: ['3 units · Range 2,500 mm', 'Volumetric accuracy 0.035 mm', 'Polyworks, CAM2, SA'] },
  { m: 'FARO Quantum E Arm — 3.5 m', s: ['3 units · Range 3,500 mm', 'Volumetric accuracy 0.075 mm', 'Polyworks, CAM2, SA'] },
  { m: 'ROMER Absolute Scan Arm RS3', s: ['Range 2,500 mm', 'Volumetric accuracy 0.050 mm', 'Probing & scanning · Polyworks, SA'] },
  { m: 'FARO Focus S350 Scanner', s: ['Range 350 m', 'Accuracy 2 mm @ 10 m', 'FARO Scene'] },
  { m: 'FARO Super 6DoF TrackArm', s: ['Vantage tracker + ScanArm', 'Eliminates line-of-sight limits', 'Multi-arm single coordinate system'] },
  { m: 'FARO Tracer SI', s: ['Range 1.8–15.2 m', '0.25 mm @ 4.7 m', 'Laser projection for assembly'] },
  { m: 'GOM ATOS Core 300', s: ['Blue-light · Area 300 × 230 mm', 'Accuracy 20 µm', 'GOM Inspect'] },
  { m: 'GOM ATOS Compact Scan 12M', s: ['Area 45×30 to 1200×1000 mm', 'Accuracy 20 µm', 'ATOS Professional'] },
  { m: 'ScanTech HSCAN 300', s: ['Range 8 m · Area 225 × 250 mm', 'Accuracy 20 µm + 25 µm/m', '265,000 measures / sec'] },
  { m: 'ZG MarvelScan', s: ['Range 5 m · Area 300 × 175 mm', 'Marker-free + built-in photogrammetry', '135,000 measures / sec'] },
  { m: 'GOM TRITOP Optical 3D CMM', s: ['Area 1100 × 1100 × 700 mm', 'Accuracy ±15 µm · non-contact', 'GOM Photogrammetry'] },
  { m: 'Pruftechnik Rotalign Touch', s: ['Range 20 m · Accuracy 1 µm', 'Multi-coupling shaft alignment', 'Live-move measurement'] },
];

const MANUFACTURING_EQUIPMENT = [
  { m: 'Double-Column VMC — Jyoti 4222', s: ['Table 4000 × 2500 mm', 'Travel 1280 × 700 × 700 mm', 'Spindle 6,000 rpm · ATC 24'] },
  { m: 'VMC — BMV 65 Sooraj', s: ['Table 4200 × 2000 mm', 'Travel 1280 × 700 × 700 mm', 'Spindle 8,000 rpm'] },
  { m: 'VMC — Eagle 1000', s: ['Table 1010 × 500 mm', 'Travel 1010 × 510 × 550 mm', 'Spindle 8,000 rpm'] },
];

const PROCESS = [
  'Design and approval of lay-up mold / trimming fixture',
  'Drawing, material and BOI procurement',
  'Sizing and roughing operation',
  'Stress relieving to ensure flatness',
  'Final machining and finish boring of reference and jig locating holes',
  'CMM inspection',
  'Polishing / hard chrome and anodizing',
  'Mold / fixture assembly and CMM check of assembly dimensions',
  'Grinding of the bottom resting datum face',
  'Report preparation in customer format and third-party verification',
  'Packing and dispatch',
];

function EquipCard({ m, s }) {
  return (
    <div className="cap-card">
      <h3 style={{ marginBottom: 14 }}>{m}</h3>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
        {s.map((line, i) => (
          <li key={i} style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.5, display: 'flex', gap: 8 }}>
            <span style={{ color: 'var(--blue)' }}>·</span><span>{line}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main style={{ paddingTop: 64 }}>
      <Seo
        title="Services — CMM Inspection, 3D Scanning, Reverse Engineering & Tooling"
        description="Six core metrology capabilities: on-site CMM inspection, 3D laser scanning, reverse engineering, dimensional analysis, alignment and precision tooling using Leica, FARO, GOM and ROMER systems."
        path="/services"
      />

      {/* HEADER + SERVICES */}
      <section className="section">
        <div className="wrap">
          <div className="section-head section-head--wide">
            <motion.div {...fadeUp()}>
              <p className="section-tag">Services</p>
              <h2 className="section-h">Full-spectrum measurement<br />and manufacturing services.</h2>
              <p className="section-sub">
                From on-site CMM inspection and long-range 3D scanning to composite tooling and laser alignment — 3DMAS covers the complete metrology and manufacturing workflow under one roof.
              </p>
            </motion.div>
          </div>

          <div style={{ marginBottom: 48, borderRadius: 8, overflow: 'hidden', height: 420 }}>
            <img src="/img/work-scan.jpg" alt="Engineer 3D scanning on-site" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>

          <motion.div className="cap-grid" {...fadeUp(0.05)}>
            {SERVICES.map((s, i) => (
              <div className="cap-card" key={i}>
                <div className="cap-icon">{s.icon}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </motion.div>

          <motion.div className="photo-strip" {...fadeUp(0.08)} style={{ marginTop: 48 }}>
            {[
              { src: '/img/service-scanning.png', alt: 'On-site 3D scanning' },
              { src: '/img/proj-steam-turbine.jpg', alt: 'Steam turbine laser mapping' },
              { src: '/img/proj-steel-mill.jpg', alt: 'Steel mill alignment' },
              { src: '/img/proj-npd-tools.jpg', alt: 'Aerospace curing tool' },
            ].map((p, i) => (
              <div key={i} className="photo-strip-item">
                <img src={p.src} alt={p.alt} loading="lazy" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MEASUREMENT EQUIPMENT */}
      <section className="section section--surface section--border-top">
        <div className="wrap">
          <div className="section-head">
            <motion.div {...fadeUp()}>
              <p className="section-tag">Measurement &amp; Inspection Equipment</p>
              <h2 className="section-h">An instrumented metrology fleet.</h2>
              <p className="section-sub">Leica, FARO, ROMER, GOM, ScanTech and Pruftechnik systems covering ranges from a few millimetres to one kilometre.</p>
            </motion.div>
          </div>
          <motion.div className="cap-grid" {...fadeUp(0.05)}>
            {INSPECTION_EQUIPMENT.map((e, i) => <EquipCard key={i} {...e} />)}
          </motion.div>
        </div>
      </section>

      {/* MANUFACTURING EQUIPMENT */}
      <section className="section section--border-top">
        <div className="wrap">
          <div className="section-head">
            <motion.div {...fadeUp()}>
              <p className="section-tag">Manufacturing Equipment</p>
              <h2 className="section-h">In-house machining capacity.</h2>
            </motion.div>
          </div>
          <motion.div style={{ borderRadius: 8, overflow: 'hidden', height: 300, marginBottom: 40 }} {...fadeUp(0.03)}>
            <img src="/img/equip-vmc.jpg" alt="Jyoti NX4222 Double-Column VMC" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </motion.div>
          <motion.div className="cap-grid" {...fadeUp(0.05)}>
            {MANUFACTURING_EQUIPMENT.map((e, i) => <EquipCard key={i} {...e} />)}
          </motion.div>
        </div>
      </section>

      {/* MANUFACTURING PROCESS */}
      <section className="section section--navy">
        <div className="wrap">
          <motion.div {...fadeUp()}>
            <p className="section-tag section-tag--light">Manufacturing Process</p>
            <h2 className="section-h section-h--light">From design approval<br />to dispatch.</h2>
          </motion.div>
          <motion.ol
            style={{ listStyle: 'none', marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 0, borderTop: '1px solid rgba(255,255,255,.08)' }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
          >
            {PROCESS.map((step, i) => (
              <motion.li
                key={i}
                style={{ padding: '28px 28px 28px 0', borderBottom: '1px solid rgba(255,255,255,.08)' }}
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
              >
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: 'rgba(255,255,255,.3)', marginBottom: 10 }}>STEP {String(i + 1).padStart(2, '0')}</div>
                <p style={{ fontSize: 14.5, color: 'rgba(255,255,255,.72)', lineHeight: 1.6 }}>{step}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--surface section--border-top">
        <div className="wrap">
          <motion.div className="cta-inner" style={{ maxWidth: 720 }} {...fadeUp()}>
            <h2 style={{ color: 'var(--navy)' }}>Need a specific measurement or manufacturing capability?</h2>
            <p style={{ color: 'var(--muted)' }}>Send us your drawings and tolerances and we'll recommend the right approach and equipment.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn-primary">Discuss Your Project</Link>
              <Link to="/industries" className="btn-secondary">Industries We Serve</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}