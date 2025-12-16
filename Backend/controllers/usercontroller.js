const User=require('../model/UserModel');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const registerUser=async(req,res)=>{    
     
    try{
        const {name,email,password}=req.body;
        const existingUser=await User.findOne({email});
        if(existingUser){   // usr already exists
            return  res.status(400).json({message:'User already exists'});
        }
        const hashedPassword=await bcrypt.hash(password,10);  // converting normal password to hashed password
        const newUser=new User({
            name,
            email,
            password:hashedPassword,
        });
        const savedUser=await newUser.save();
        res.status(201).json({savedUser,message:'User registered successfully'});
    }

    catch(error){
        res.status(500).json({message:'Server Error'});
    }
};

const loginUser=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){  // user not found
            return res.status(404).json({message:'User not found  please register'});
        }
        const isPasswordValid=await bcrypt.compare(password,user.password);  //  (comparing normal password(giving password) with hashed password(database password))

         if(!isPasswordValid){  // invalid password
            return res.status(400).json({message:'Invalid password'});
         }
         const token=jwt.sign({userId:user._id},process.env.JWT_SECRET);
         res.status(200).json({token,message:'Login successful' });
    }   
    catch(error){
        res.status(500).json({message:'Server Error'});
    }   
};

module.exports={registerUser,loginUser};





