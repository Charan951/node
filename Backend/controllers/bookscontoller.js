const books=require('../model/Book');

const addbook=async(req,res)=>{
    try{
        const { title, author,publishedDate  }=req.body;
        const newBook=new books({ title, author,publishedDate });
        const savedBook=await newBook.save();
        res.status(201).json(savedBook);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}

const getbooks=async(req,res)=>{
    try{
        const allBooks=await books.find();
        res.status(200).json(allBooks);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}
const updatebook=async(req,res)=>{
    try{
      
        const { title, author,publishedDate  }=req.body;
        const updatedBook=await books.findByIdAndUpdate(req.params.id,{ title, author,publishedDate });
        res.status(200).json(updatedBook);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }   
}

const deletebook=async(req,res)=>{
    try{
        const deletedBook=await books.findByIdAndDelete(req.params.id); 
        res.status(200).json(deletedBook);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}

module.exports={addbook,getbooks,updatebook,deletebook};    
