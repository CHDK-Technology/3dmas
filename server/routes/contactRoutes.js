import express from 'express';
import { submitContact, getContacts } from '../controllers/contactController.js';

const router = express.Router();

// Simple admin guard for reading stored submissions.
// Requires header `x-admin-key` to match ADMIN_API_KEY. Denies if the key is unset.
function requireAdmin(req, res, next) {
  const expected = process.env.ADMIN_API_KEY;
  if (!expected || req.get('x-admin-key') !== expected) {
    return res.status(401).json({ success: false, message: 'Unauthorized.' });
  }
  next();
}

router.post('/', submitContact);
router.get('/', requireAdmin, getContacts);

export default router;
