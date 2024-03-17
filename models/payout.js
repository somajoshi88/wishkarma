

const mongoose = require('mongoose');

const payoutSchema = new mongoose.Schema({
    payoutDate: { type: Date, required: true },
    employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
    fixedAmount: { type: Number, required: true },
    variableAmount: { type: Number, required: true },
    deductions: Number
});

module.exports = mongoose.model('Payout', payoutSchema);
