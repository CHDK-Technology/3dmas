// Placeholder client/partner logo marks — clean monochrome SVGs so the strip looks
// finished. Swap these for your real client logos (drop SVG/PNG files in /public/img
// and replace each <svg> with <img src="/img/your-logo.svg" />).
const marks = [
  (<svg viewBox="0 0 120 40" key="1"><text x="0" y="28" fontFamily="Helvetica,Arial" fontSize="24" fontWeight="700" fill="#fff" letterSpacing="-1">AERO<tspan fill="#1b4dff">X</tspan></text></svg>),
  (<svg viewBox="0 0 120 40" key="2"><circle cx="18" cy="20" r="13" fill="none" stroke="#fff" strokeWidth="3"/><text x="40" y="27" fontFamily="Helvetica,Arial" fontSize="20" fontWeight="600" fill="#fff">ORBIT</text></svg>),
  (<svg viewBox="0 0 120 40" key="3"><path d="M6 30 L18 10 L30 30 Z" fill="none" stroke="#fff" strokeWidth="3"/><text x="40" y="27" fontFamily="Helvetica,Arial" fontSize="20" fontWeight="700" fill="#fff">PEAK</text></svg>),
  (<svg viewBox="0 0 120 40" key="4"><rect x="6" y="8" width="24" height="24" rx="5" fill="none" stroke="#fff" strokeWidth="3"/><text x="42" y="27" fontFamily="Helvetica,Arial" fontSize="20" fontWeight="600" fill="#fff">NOVA</text></svg>),
  (<svg viewBox="0 0 120 40" key="5"><text x="0" y="28" fontFamily="Helvetica,Arial" fontSize="22" fontWeight="800" fill="#fff" letterSpacing="1">VELOX</text></svg>),
  (<svg viewBox="0 0 120 40" key="6"><circle cx="14" cy="20" r="6" fill="#1b4dff"/><circle cx="30" cy="20" r="6" fill="none" stroke="#fff" strokeWidth="3"/><text x="46" y="27" fontFamily="Helvetica,Arial" fontSize="19" fontWeight="600" fill="#fff">DUET</text></svg>),
];

export default function ClientLogos() {
  return (
    <div className="wrap">
      <div className="logos">
        <div className="lab">Trusted by engineering teams across India</div>
        <div className="logo-row">
          {marks.map((m, i) => <div className="logo-cell" key={i}>{m}</div>)}
        </div>
      </div>
    </div>
  );
}
