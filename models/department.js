

const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    name: { type: String, unique: true, index: true, required: true },
    duties: { type: String, text: true }, 
    startDate: { type: Date, required: true },
    deptHead: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', default: null }
});

module.exports = mongoose.model('Department', departmentSchema);
