// Single intro animation: a full-screen blue panel that wipes upward to reveal
// the page — the same idea as Sundown Studio's overlay, recoloured to blue.
// Pure CSS (see .loader in index.css); no JS timers, runs once on mount.
export default function Loader() {
  return (
    <div className="loader" aria-hidden="true">
      <div className="lname">3DMAS</div>
      <div className="lsub">3 Dimensional Measurement &amp; Solution</div>
    </div>
  );
}
