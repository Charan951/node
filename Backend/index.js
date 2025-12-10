const express=require('express');
const app=express();
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const employeroutes=require('./routes/employeroutes');

app.use(express.json());




dotenv.config();

app.use('/api/employee',employeroutes);


mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.log(err);
});



app.get('/',(req,res)=>{
    res.send('Hello World!');
});

app.get('/charan',(req,res)=>{
    res.send('Hello Charan!');
});



const PORT=process.env.Port || 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
