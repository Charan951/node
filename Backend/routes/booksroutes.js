
const express=require('express');
const app=express();

const router=express.Router();
const {addbook,getbooks,updatebook,deletebook}=require('../controllers/bookscontoller');


router.post('/add-book',addbook);
router.get('/get-books',getbooks);
router.put('/update-book/:id',updatebook);
router.delete('/delete-book/:id',deletebook);

module.exports=router;