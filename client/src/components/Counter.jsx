import { useEffect, useRef, useState } from 'react';

/*
  Counter — counts up to `to` when scrolled into view (once).
  <Counter to={28000} />  ·  <Counter to={140} suffix=" KVA" />
*/
export default function Counter({ to = 0, duration = 1600, prefix = '', suffix = '', decimals = 0, group = true }) {
  const ref = useRef(null);
  const started = useRef(false);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const t0 = performance.now();
            const tick = (t) => {
              const p = Math.min(1, (t - t0) / duration);
              const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
              setVal(to * eased);
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  const display =
    decimals > 0
      ? val.toFixed(decimals)
      : group
      ? Math.round(val).toLocaleString('en-IN')
      : String(Math.round(val));

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}