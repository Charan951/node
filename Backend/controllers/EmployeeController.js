const Employee=require('../model/Employee');

// Create a new employee
const createEmployee=async(req,res)=>{      
    try{
        const { name, email, address, phone }=req.body;    // getting values from user or frontend  to backend 
        const newEmployee=new Employee({          // new employee object creation
            name,   
            email,
            address,
            phone,
        });
        const savedEmployee=await newEmployee.save();   // saving new employee to database
        res.status(201).json(savedEmployee);       // give response to frontend or user  with saved employee data
    }       
    catch(err){
        res.status(500).json({ message: err.message });
    }
}
const getEmployees=async(req,res)=>{
    try{
        const employees=await Employee.find();   // fetching all employees from database

        res.status(200).json(employees);   // sending the fetched employees as response
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
}

const getEmployeeById=async(req,res)=>{
    try{
        const employee=await Employee.findById(req.params.name);
        res.status(200).json(employee);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}



 module.exports={createEmployee,getEmployees,getEmployeeById};
