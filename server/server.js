// server.js

const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 5000;

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images'); // Save in the "images" directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

app.use(express.static('public'));

// Upload route
app.post('/upload', upload.single('image'), (req, res) => {
  res.json({ message: 'File uploaded successfully' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
