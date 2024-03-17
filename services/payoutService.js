const Employee = require('../models/employee');
const csv = require('csv-parser');
const Payout = require('../models/payout');
const connectDB = require('../config/db');

const uploadPayouts = async function uploadPayouts(payouts) {    
    try {        
        
        for (const payout of payouts) {            

            const employee = await Employee.findById(payout.employee);
            
            if (!employee) {
                throw new Error(`Employee with ID ${payout.employee} not found`); 
            }
            
            payout.employee = employee._id; 
            
            const newPayout = new Payout(payout);
            
            await newPayout.save();
        }

        console.log('Payouts uploaded successfully');
    } catch (error) {
        console.error('Error while uploading payouts:', error);
        throw error;
    }
};

module.exports = {
    uploadPayouts
};
