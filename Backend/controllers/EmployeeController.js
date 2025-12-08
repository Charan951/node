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



 module.exports={createEmployee};
