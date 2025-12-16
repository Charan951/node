const express=require('express');
const app=express();
const dotenv=require('dotenv');
const connectDB=require('./config/db');
const employeroutes=require('./routes/employeroutes');
const booksroutes=require('./routes/booksroutes');
const userroutes=require('./routes/userroutes');

app.use(express.json());




dotenv.config();
connectDB();

app.use('/api/employee',employeroutes);
app.use('/api/books',booksroutes);
app.use('/api/user',userroutes);



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
