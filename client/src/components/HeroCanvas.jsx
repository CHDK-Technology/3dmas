import { useEffect, useRef } from 'react';

/*
  HeroCanvas — a subtle drifting point cloud with thin connecting lines.
  Evokes 3D-scan point data. Brand-tinted, low contrast, slow — professional, not gamey.
  Respects prefers-reduced-motion (renders a single static frame).
*/
export default function HeroCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    let points = [];

    const CYAN = '0,168,228';
    const ORANGE = '240,120,24';

    function seed() {
      const count = Math.max(36, Math.min(80, Math.floor((w * h) / 26000)));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.6 + 0.6,
        warm: Math.random() < 0.22,
      }));
    }

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      // connecting lines
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        for (let j = i + 1; j < points.length; j++) {
          const q = points[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 19000) {
            const a = (1 - d2 / 19000) * 0.16;
            ctx.strokeStyle = `rgba(${CYAN},${a})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
      // nodes
      for (const p of points) {
        ctx.fillStyle = `rgba(${p.warm ? ORANGE : CYAN},${p.warm ? 0.7 : 0.55})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function step() {
      for (const p of points) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      draw();
      raf = requestAnimationFrame(step);
    }

    resize();
    if (reduce) { draw(); } else { raf = requestAnimationFrame(step); }
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return <canvas ref={ref} className="hero-canvas" aria-hidden="true" />;
}