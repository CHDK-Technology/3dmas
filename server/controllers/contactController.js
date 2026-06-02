import mongoose from 'mongoose';

const dbReady = () => mongoose.connection.readyState === 1;

// POST /api/contact
export const submitContact = async (req, res) => {
  try {
    const { name, email, company, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
    }
    if (!dbReady()) {
      // DB not connected — log to console and ack the form anyway
      console.log('Contact (no DB):', { name, email, company, message });
      return res.status(201).json({ success: true, message: 'Your message was received!' });
    }
    const Contact = (await import('../models/Contact.js')).default;
    const contact = await Contact.create({ name, email, company, message });
    res.status(201).json({ success: true, message: 'Your message was received!', data: contact });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
};

// GET /api/contact  (admin use)
export const getContacts = async (req, res) => {
  if (!dbReady()) return res.json({ success: true, data: [] });
  try {
    const Contact = (await import('../models/Contact.js')).default;
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};
