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
        const employee=await Employee.findById(req.params.id);
        res.status(200).json(employee);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}

const updateEmployee=async(req,res)=>{
    try{
        const updateEmployee=await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        res.status(200).json(updateEmployee);
        
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
            
}

const deleteEmployee=async(req,res)=>{
    try{
        const deleteEmployee=await Employee.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteEmployee);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}



 module.exports={createEmployee,getEmployees,getEmployeeById,updateEmployee,deleteEmployee};
