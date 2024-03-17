
const express = require('express');
const router = express.Router();
const employeeService = require('../services/employeeService');


router.post('/', async (req, res) => {
    try {
        const employee = await employeeService.createEmployee(req.body);
        console.log('route Data is {}',employee)
        res.status(201).send(employee);
    } catch (error) {
        console.error("error is {}",error)
        res.status(400).send(error);
    }
});
router.post('/createAll', async (req, res) => {
    try {
        const employees = req.body; // Array of employee objects
        const createdEmployees = await employeeService.createEmployees(employees);
        res.status(201).json(createdEmployees);
    } catch (error) {
        console.error('Error while creating employees:', error);
        res.status(500).send('Internal server error');
    }
});


router.put('/:email', async (req, res) => {
    try {
        console.log("email is {} and body is {}",req.params.email,req.body)
        const employee = await employeeService.updateEmployeeByEmail(req.params.email, req.body);
        console.log("employee is {}",employee)
        if (!employee) {
            return res.status(404).send();
        }
        res.send(employee);
    } catch (error) {
        res.status(400).send(error);
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const employee = await employeeService.deleteEmployee(req.params.id);
        if (!employee) {
            return res.status(404).send();
        }
        res.send(employee);
    } catch (error) {
        res.status(500).send(error);
    }
});
router.get('/:id', async (req, res) => {
    try {
      const employeeId = req.params.id;
      const employee = await employeeService.getEmployeeById(employeeId);
      res.json(employee);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
// Get all Employees with their department name and their Department Head Name
router.get('/', async (req, res) => {
    try {
        const employees = await employeeService.getAllEmployeesWithDepartmentAndHead();
        res.send(employees);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get employees total payout for the year 2023 or any other year
router.get('/total-payout/:year', async (req, res) => {
    try {
        const year = parseInt(req.params.year);
        const payouts = await employeeService.getEmployeesTotalPayoutForYear(year);
        res.send(payouts);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get Top employees who received the highest variableAmount for each month
router.get('/top-employees/:year', async (req, res) => {
    try {
        const { year, month } = req.params;
        const topEmployees = await employeeService.getTopEmployeesByVariableAmount( parseInt(year));
        res.send(topEmployees);
    } catch (error) {
        res.status(500).send(error);
    }
});
 

// Get all employees who didn't get any payout for a specific month and year
router.get('/no-payout/:year/:month', async (req, res) => {
    try {
        const { year, month } = req.params;
        const employeesWithoutPayout = await employeeService.getEmployeesWithoutPayoutForMonth(parseInt(month), parseInt(year));
        res.send(employeesWithoutPayout);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
