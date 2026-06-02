import cloudinary from '../config/cloudinary.js';

// POST /api/media/upload  — accepts a single file (multipart/form-data, field "file")
export const uploadMedia = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file provided.' });
    }

    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: '3dmas', resource_type: 'auto' },
        (err, result) => (err ? reject(err) : resolve(result))
      );
      stream.end(req.file.buffer);
    });

    res.status(201).json({
      success: true,
      url: result.secure_url,
      publicId: result.public_id,
      resourceType: result.resource_type,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Upload failed.', error: error.message });
  }
};

// DELETE /api/media/:publicId
export const deleteMedia = async (req, res) => {
  try {
    const publicId = decodeURIComponent(req.params.publicId);
    await cloudinary.uploader.destroy(publicId);
    res.json({ success: true, message: 'File deleted.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Delete failed.', error: error.message });
  }
};
