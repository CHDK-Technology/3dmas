import { motion } from 'framer-motion';
import { Image as ImageIcon, Film } from 'lucide-react';

/*
  Media — a labeled image/video slot with a subtle reveal animation.

  Until you supply a real file, it shows a clean labeled placeholder telling
  you what belongs there. To go live, pass `src` (and `type="video"` for clips):

    <Media type="image" ratio="16/9" src="/src/img/facility.jpg" label="Facility" />
    <Media type="video" ratio="16/9" src="/src/img/process.mp4" poster="/src/img/process.jpg" />

  Drop files into client/src/img/ and reference them as '/src/img/<file>'.
*/
export default function Media({
  type = 'image',
  src = '',
  poster = '',
  ratio = '16/9',
  label = 'Image',
  note = '',
  className = '',
}) {
  return (
    <motion.div
      className={`media-frame ${className}`}
      style={{ aspectRatio: ratio }}
      initial={{ opacity: 0, scale: 1.04 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {src ? (
        type === 'video' ? (
          <video src={src} poster={poster} autoPlay muted loop playsInline preload="metadata" />
        ) : (
          <img src={src} alt={label} loading="lazy" />
        )
      ) : (
        <div className="media-ph2">
          {type === 'video' ? <Film size={22} /> : <ImageIcon size={22} />}
          <span className="media-ph2-label">{type === 'video' ? 'Video' : 'Image'} · {label}</span>
          {note && <span className="media-ph2-note">{note}</span>}
        </div>
      )}
    </motion.div>
  );
}