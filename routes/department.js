
const express = require('express');
const router = express.Router();
const Department = require('../models/department');
const departmentService = require('../services/departmentService');


router.post('/', async (req, res) => {
    try {
        const department = new Department(req.body);
        console.log('route Data is {}',department)
        await department.save();
        res.status(201).send(department);
    } catch (error) {
        console.error("error is {}",error)
        res.status(400).send(error);
    }
});

router.put('/', async (req, res) => {
    try {
        const updatedDepartments = await departmentService.updateDepartments(req.body);
        res.json(updatedDepartments);
    } catch (error) {
        console.error('Error updating departments:', error);
        res.status(500).send('Internal server error');
    }
});


router.put('/:id', async (req, res) => {
    try {
        const department = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!department) {
            return res.status(404).send();
        }
        res.send(department);
    } catch (error) {
        res.status(400).send(error);
    }
});
// GET all departments and their columns
router.get('/', async (req, res) => {
    try {
        const departments = await departmentService.getAllDepartments();
        res.json(departments);
    } catch (error) {
        console.error('Error while fetching departments:', error);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;
