const marks = [
  (<svg viewBox="0 0 120 40" key="1"><text x="0" y="28" fontFamily="inherit" fontSize="22" fontWeight="700" fill="currentColor" letterSpacing="-1">AERO<tspan opacity=".5">X</tspan></text></svg>),
  (<svg viewBox="0 0 120 40" key="2"><circle cx="16" cy="20" r="11" fill="none" stroke="currentColor" strokeWidth="2.5"/><text x="36" y="26" fontFamily="inherit" fontSize="18" fontWeight="600" fill="currentColor">ORBIT</text></svg>),
  (<svg viewBox="0 0 120 40" key="3"><path d="M6 30 L16 10 L26 30 Z" fill="none" stroke="currentColor" strokeWidth="2.5"/><text x="36" y="26" fontFamily="inherit" fontSize="18" fontWeight="700" fill="currentColor">PEAK</text></svg>),
  (<svg viewBox="0 0 120 40" key="4"><rect x="5" y="9" width="22" height="22" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5"/><text x="36" y="26" fontFamily="inherit" fontSize="18" fontWeight="600" fill="currentColor">NOVA</text></svg>),
  (<svg viewBox="0 0 120 40" key="5"><text x="0" y="27" fontFamily="inherit" fontSize="20" fontWeight="800" fill="currentColor" letterSpacing="1">VELOX</text></svg>),
  (<svg viewBox="0 0 120 40" key="6"><circle cx="12" cy="20" r="5" fill="currentColor" opacity=".4"/><circle cx="26" cy="20" r="5" fill="none" stroke="currentColor" strokeWidth="2.5"/><text x="40" y="26" fontFamily="inherit" fontSize="17" fontWeight="600" fill="currentColor">DUET</text></svg>),
];

export default function ClientLogos() {
  return (
    <div>
      <p className="logos-label">Trusted by engineering teams across India</p>
      <div className="logos-grid" style={{ color: 'var(--charcoal)' }}>
        {marks.map((m, i) => (
          <div className="logo-cell" key={i}>{m}</div>
        ))}
      </div>
    </div>
  );
}
