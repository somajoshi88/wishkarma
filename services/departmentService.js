
const Department = require('../models/department');

const connectDB = require('../config/db');

async function getDepartmentIdByName(departmentName) {
    try {
        const department = await Department.findOne({ name: departmentName });
        if (!department) {
            throw new Error('Department not found');
        }
        return department._id;
    } catch (error) {
        throw new Error(`Failed to fetch department ID for ${departmentName}: ${error.message}`);
    }
}
async function createDepartment(data) {
    try {
        console.log('service Data is ${data}')
        const department = new Department(data);
        await department.save();
        return department;
    } catch (error) {
        console.error('error occured ')
        throw error;
    }
}

async function updateDepartmentByID(id, data) {
    try {
        const department = await Department.findByIdAndUpdate(id, data, { new: true });
        return department;
    } catch (error) {
        throw error;
    }
}


const updateDepartments = async function updateDepartments(departments) {
    try {
        const updatedDepartments = [];
        for (const departmentData of departments) {
            const { _id, ...updateData } = departmentData;
            const updatedDepartment = await Department.findByIdAndUpdate(_id, updateData, { new: true });
            updatedDepartments.push(updatedDepartment);
        }
        return updatedDepartments;
    } catch (error) {
        console.error('Error updating departments:', error);
        throw error;
    }
};

const updateDepartment = async (departmentData) => {
    const { _id, ...updateData } = departmentData;
    return await Department.findByIdAndUpdate(_id, updateData, { new: true });
};

async function getAllDepartments()  {
    try {
       
        const departments = await Department.find().exec();
        return departments;
    } catch (error) {
        console.error('Error while fetching departments:', error);
        throw error;
    }
};

module.exports = {
    updateDepartmentByID,
    updateDepartments,
    createDepartment,    
    getDepartmentIdByName,
    getAllDepartments
};
