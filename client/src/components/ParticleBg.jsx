import { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 55;

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

export default function ParticleBg({ scanLine = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Particles: small dots drifting upward slowly
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: rand(0, canvas.width),
      y: rand(0, canvas.height),
      r: rand(0.6, 2.2),
      vy: rand(-0.12, -0.38),
      vx: rand(-0.08, 0.08),
      alpha: rand(0.06, 0.22),
      pulse: rand(0, Math.PI * 2),
      pulseSpeed: rand(0.008, 0.022),
    }));

    // Scan line state
    let scanY = 0;
    const SCAN_SPEED = 0.4;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Particles
      for (const p of particles) {
        p.pulse += p.pulseSpeed;
        const a = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,224,255,${a})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.y < -4) { p.y = h + 4; p.x = rand(0, w); }
        if (p.x < -4) p.x = w + 4;
        if (p.x > w + 4) p.x = -4;
      }

      // Optional horizontal scan line
      if (scanLine) {
        scanY = (scanY + SCAN_SPEED) % h;
        const grad = ctx.createLinearGradient(0, scanY - 40, 0, scanY + 4);
        grad.addColorStop(0, 'rgba(0,224,255,0)');
        grad.addColorStop(1, 'rgba(0,224,255,0.07)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, scanY - 40, w, 44);

        ctx.beginPath();
        ctx.moveTo(0, scanY);
        ctx.lineTo(w, scanY);
        ctx.strokeStyle = 'rgba(0,224,255,0.18)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [scanLine]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
