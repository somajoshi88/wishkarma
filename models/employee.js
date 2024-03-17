
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    joiningDate: { type: Date, required: true },
    leavingDate: Date,
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true },
    designation: { type: String, required: true }
});

module.exports = mongoose.model('Employee', employeeSchema);
