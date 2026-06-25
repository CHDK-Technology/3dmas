import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') onNext();
    if (e.key === 'ArrowLeft') onPrev();
  }, [onClose, onNext, onPrev]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  if (index === null || index === undefined) return null;
  const img = images[index];

  return (
    <AnimatePresence>
      <motion.div
        className="lightbox-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      >
        {/* prev */}
        {images.length > 1 && (
          <button className="lightbox-arrow lightbox-arrow--prev" onClick={e => { e.stopPropagation(); onPrev(); }} aria-label="Previous">&#8249;</button>
        )}

        {/* image */}
        <motion.div
          className="lightbox-img-wrap"
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.88, opacity: 0 }}
          transition={{ duration: 0.22 }}
          onClick={e => e.stopPropagation()}
          key={index}
        >
          <img src={img.src} alt={img.alt} />
          {img.alt && <p className="lightbox-caption">{img.alt}</p>}
        </motion.div>

        {/* next */}
        {images.length > 1 && (
          <button className="lightbox-arrow lightbox-arrow--next" onClick={e => { e.stopPropagation(); onNext(); }} aria-label="Next">&#8250;</button>
        )}

        {/* close */}
        <button className="lightbox-close" onClick={onClose} aria-label="Close">&#10005;</button>

        {/* counter */}
        {images.length > 1 && (
          <div className="lightbox-counter">{index + 1} / {images.length}</div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
