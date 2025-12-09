const express = require('express');

const router = express.Router();
const { createEmployee, getEmployees,getEmployeeById } = require('../controllers/EmployeeController');

router.post('/add-employee', createEmployee); 
router.get('/getemployees', getEmployees);
router.get('/getemployee/:id', getEmployeeById);


module.exports = router;




 // Route to create a new employee