import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ClientLogos from '../components/ClientLogos.jsx';

const services = [
  { n: '01', t: 'Dimensional Inspection', img: '/img/services-1.jpg',
    d: 'On-site CMM inspection with Leica & FARO laser trackers and Romer portable arms — first-article and lot inspection across large fabricated structures.' },
  { n: '02', t: '3D Laser Scanning', img: '/img/work-scan.jpg',
    d: 'Long-range and blue-light scanning with Leica P50, GOM and FARO Focus — digital mapping from handheld parts to kilometre-scale structures.' },
  { n: '03', t: 'Reverse Engineering', img: '/img/work-composite.jpg',
    d: 'Production-ready CAD reconstructed from castings, dies, moulds and worn legacy components with micron fidelity.' },
  { n: '04', t: 'Tool & Mold Manufacturing', img: '/img/work-mold.jpg',
    d: 'Composite lay-up molds, trimming and vacuum clamping fixtures, machined on double-column VMCs.' },
  { n: '05', t: 'Laser Alignment & Mapping', img: '/img/services-3.jpg',
    d: 'Steam turbine digital mapping, generator stator key-bar setting, and steel & paper mill laser alignment.' },
];

const trio = [
  { n: '(01)', t: 'Inspect', d: 'On-site CMM inspection with Leica & FARO laser trackers and Romer portable arms — dimensional validation, first-article and lot inspection across large structures.' },
  { n: '(02)', t: 'Engineer', d: '3D laser scanning, CAD comparison and reverse engineering — from handheld parts to kilometre-scale digital mapping with GOM, FARO Focus and Leica P50.' },
  { n: '(03)', t: 'Manufacture', d: 'Composite part molds, trimming and vacuum clamping fixtures, machined on double-column VMCs and verified to customer format with third-party inspection.' },
];

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function HomePage() {
  useReveal();
  const [active, setActive] = useState(0);

  return (
    <main>
      {/* HERO — background image + overlay */}
      <section className="hero">
        <div className="hero-bg">
          <img src="/img/hero-bg.jpg" alt="3DMAS measurement & manufacturing facility" />
        </div>

        <div className="hero-content">
          <div className="wrap">
            <p className="hero-intro">
              3DMAS is a 3-dimensional measurement &amp; solution company — delivering on-site
              inspection, 3D scanning, reverse engineering and precision tooling since 2015.
            </p>
            <h1 className="hero-h1">Precision<br />that performs</h1>
          </div>
        </div>
      </section>

      {/* COMPANY LOGOS */}
      <ClientLogos />

      {/* VIDEO CLIP */}
      <section className="sec">
        <div className="wrap">
          <div className="video-wrap reveal">
            {/* To use a real clip: replace this block with
                <video src="/img/your-clip.mp4" poster="/img/video-poster.jpg" controls /> */}
            <img src="/img/video-poster.jpg" alt="3DMAS facility walkthrough" />
            <div className="vover" />
            <div className="play">
              <svg width="26" height="30" viewBox="0 0 26 30" fill="#fff"><path d="M0 0l26 15L0 30z" /></svg>
            </div>
          </div>
          <div className="video-cap">
            <span>A walkthrough of our 28,000 sq ft design, manufacturing &amp; metrology floor.</span>
            <span>02:14</span>
          </div>
        </div>
      </section>

      {/* SERVICES LIST + IMAGE */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="eyebrow reveal">What we do</p>
          <h2 className="svc-head reveal">Everything you need, measured and made under one roof.</h2>
          <div className="svc-grid">
            <div className="svc-list reveal">
              {services.map((s, i) => (
                <Link to="/" className="svc-item" key={s.n}
                      onMouseEnter={() => setActive(i)}>
                  <div className="top">
                    <span className="sn">{s.n}</span>
                    <h3>{s.t}</h3>
                    <span className="arr">→</span>
                  </div>
                  <p>{s.d}</p>
                </Link>
              ))}
            </div>
            <div className="svc-media reveal">
              <img src={services[active].img} alt={services[active].t} />
            </div>
          </div>
        </div>
      </section>

      {/* INSPECT / ENGINEER / MANUFACTURE */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="trio">
            {trio.map((c) => (
              <div className="reveal" key={c.n}>
                <div className="num">{c.n}</div>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
