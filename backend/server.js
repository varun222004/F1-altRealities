const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/connectDB');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize express
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// ✅ Import routes
const f1Routes = require('./routes/f1Routes');

// ✅ Use routes
app.use('/api/f1', f1Routes);

// Root route
app.get('/', (req, res) => {
  res.send('F1 Alternate Realities Backend is Running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
