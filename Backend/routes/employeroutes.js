const express = require('express');

const router = express.Router();
const { createEmployee, getEmployees,getEmployeeById ,updateEmployee,deleteEmployee} = require('../controllers/EmployeeController');

router.post('/add-employee', createEmployee); 
router.get('/getemployees', getEmployees);
router.get('/getemployee/:id', getEmployeeById);
router.put('/update-employee/:id', updateEmployee);
router.delete('/delete-employee/:id', deleteEmployee);


module.exports = router;




 // Route to create a new employee