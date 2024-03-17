
const Employee = require('../models/employee');
const Payout = require('../models/payout');
const connectDB = require('../config/db');
const departmentService= require('./departmentService')
async function createEmployee(data) {
    try {
        const departmentId = await departmentService.getDepartmentIdByName(data.department);
        data.department = departmentId;
        const employee = new Employee(data);
        await employee.save();
        return employee;
    } catch (error) {
        throw error;
    }
}
const createEmployees = async function(employees) {
    try {
        const createdEmployees = await Employee.insertMany(employees);
        return createdEmployees;
    } catch (error) {
        console.error('Error while creating employees:', error);
        throw error;
    }
};

async function updateEmployeeByEmail(email, data) {
    try {
        
        const employee = await Employee.findOneAndUpdate({ email }, data, { new: true });
        console.log("inside service employee is {}",employee)
        return employee;
    } catch (error) {
        throw error;
    }
}

async function deleteEmployee(id) {
    try {
        const employee = await Employee.findByIdAndDelete(id);
        return employee;
    } catch (error) {
        throw error;
    }
}
async function getEmployeeById(employeeId) {
    try {
      const employee = await Employee.findById(employeeId);
      if (!employee) {
        throw new Error('Employee not found');
      }
      return employee;
    } catch (error) {
      throw error;
    }
  }
async function getAllEmployeesWithDepartmentAndHead() {
    try {
        const employees = await Employee.find().populate('department', 'name').populate('department.deptHead', 'firstName lastName');
        return employees;
    } catch (error) {
        throw error;
    }
}

async function getEmployeesTotalPayoutForYear(year) {
    try {
        const payouts = await Payout.aggregate([
            {
                $match: {
                    payoutDate: {
                        $gte: new Date(year, 0),
                        $lt: new Date(year + 1, 0)
                    }
                }
            },
            {
                $group: {
                    _id: '$employee',
                    total: {
                        $sum: { $subtract: [{ $add: ['$fixedAmount', '$variableAmount'] }, '$deductions'] }
                    }
                }
            },
            {
                $lookup: {
                    from: 'employees',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'employeeInfo'
                }
            },
            {
                $project: {
                    _id: 1,
                    total: 1,
                    employee: { $arrayElemAt: ['$employeeInfo', 0] }
                }
            }
        ]);
        return payouts;
    } catch (error) {
        throw error;
    }
}


async function getTopEmployeesByVariableAmount( year) {
    try {
        const topEmployees = await Payout.aggregate([
            {
                $match: {
                  payoutDate: {
                    $gte: new Date(year, 0, 1), // Start of the year
                    $lt: new Date(year + 1, 0, 1) // Start of the next year
                  },
                  variableAmount: { $exists: true } // Filter out documents where variableAmount exists
                }
              },
              {
                $lookup: {
                  from: 'employees', // Name of the collection to join
                  localField: 'employee',
                  foreignField: '_id',
                  as: 'employeeInfo' // Store the joined employee document in this field
                }
              },
              {
                $unwind: '$employeeInfo' // Deconstruct the array created by $lookup to get individual employee documents
              },
              {
                $project: {
                  month: { $month: '$payoutDate' }, // Extract month from payoutDate
                  year: { $year: '$payoutDate' }, // Extract year from payoutDate
                  employee: '$employeeInfo', // Store the joined employee document in a field named 'employee'
                  variableAmount: 1
                }
              },
              {
                $group: {
                  _id: { month: '$month', year: '$year' }, // Group by month and year
                  maxVariableAmount: { $max: '$variableAmount' }, // Find max variableAmount for each group
                  topEmployees: {
                    $push: {
                      employee: {
                        firstName: '$employee.firstName',
                        lastName: '$employee.lastName',
                      },
                      variableAmount: '$variableAmount'
                    }
                  }
                }
              },
              {
                $project: {
                  _id: 0,
                  month: '$_id.month',
                  year: '$_id.year',
                  topEmployees: {
                    $filter: {
                      input: '$topEmployees',
                      cond: { $eq: ['$maxVariableAmount', '$$this.variableAmount'] } // Filter top employees with max variableAmount
                    }
                  }
                }
              }
        ]);
        return topEmployees;
    } catch (error) {
        throw error;
    }
}


async function getEmployeesWithoutPayoutForMonth(month, year) {
    try {
        const employeesWithoutPayout = await Employee.aggregate([
            {
                $lookup: {
                    from: 'payouts',
                    localField: '_id',
                    foreignField: 'employee',
                    as: 'payouts'
                }
            },
            {
                $match: {
                    $or: [
                        { 'payouts': { $eq: [] } },
                        {
                            $and: [
                                { 'payouts.payoutDate': { $not: { $gte: new Date(year, month - 1), $lt: new Date(year, month) } } }
                            ]
                        }
                    ]
                }
            }
        ]);
        return employeesWithoutPayout;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createEmployee,
    createEmployees,
    updateEmployeeByEmail,
    deleteEmployee,
    getEmployeeById,
    getAllEmployeesWithDepartmentAndHead,
    getEmployeesTotalPayoutForYear,
    getTopEmployeesByVariableAmount,    
    getEmployeesWithoutPayoutForMonth
};