import express from 'express';
import multer from 'multer';
import { uploadMedia, deleteMedia } from '../controllers/mediaController.js';

const router = express.Router();

// Store file in memory so we can stream it to Cloudinary
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 20 * 1024 * 1024 }, // 20 MB
  fileFilter: (_req, file, cb) => {
    const allowed = /image\/(jpeg|png|webp|gif)|video\/(mp4|mov|webm)/;
    cb(null, allowed.test(file.mimetype));
  },
});

router.post('/upload', upload.single('file'), uploadMedia);
router.delete('/:publicId', deleteMedia);

export default router;
