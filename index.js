const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');

// Initialize express app
const app = express();

// Connect Database
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/supplier', require('./routes/supplierRoutes'));

// Define the PORT
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port : ${PORT}`));
