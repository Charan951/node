const express = require('express');

const router = express.Router();
const { createEmployee } = require('../controllers/EmployeeController');

router.post('/add-employee', createEmployee); 


module.exports = router;




 // Route to create a new employee