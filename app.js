// Importing dependencies
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Inisialisasi Express
const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB URI
const mongoURI = process.env.DB_CONNECTION;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());

// Tambahkan routing karakter (gunakan /characters sebagai base path)
const characterRoutes = require('./routes/characterRoutes');
app.use('/characters', characterRoutes);

// Route default
app.get('/', (req, res) => {
  res.send('Welcome to the API! Successfully connected to MongoDB.');
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
