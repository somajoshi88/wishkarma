
// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const colors = require('colors');
const dotenv = require('dotenv');
const path = require('path');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();
// Import routes
const employeeRoutes = require('./routes/employee');
const departmentRoutes = require('./routes/department');
const payoutRoutes = require('./routes/payout');

// Create Express app
const app = express();

// Middleware
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
// Use routes
app.use('/api/employees', employeeRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/payouts', payoutRoutes);

// Start server
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
