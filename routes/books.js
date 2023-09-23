const express=require("express")
const router=express.Router();
const Book=require("../models/Book")

//api here
router.post("/",async(req,res)=>{
    try{
        const{title,author,genre,description,price}=req.body;
        const newBook=new Book({title,author,genre,description,price})
        await newBook.save()

    }catch(error){
        res.status(500).json({message:error.message})
    }
})

router.get("/",async(req,res)=>{
    try{
        const books=await Book.find()
        res.json(books)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

router.delete(":/id",async(req,res)=>{
    try{
        const book=await Book.findById(req.params.id)
        if(book){
            await book.remove()
            res.json({message:"Book Deleted "})
        }else{
            res.status(404).json({message:"book not found"})
        }
    }catch(error){
        res.status(500).json({message:error.message})
    }
});


router.get("/filter",async(req,res)=>{
    try{
        const{ganre}=req.query
        const filteredBook=await Book.find({genre})
        res.json(filteredBook)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})




router.get("/sort",async(req,res)=>{
    try{
        const {sortBy}= req.query;
        const sortedBooks=await Book.find().sort({price:sortBy})
        res.json(sortedBooks)

    }catch(error){
        res.status(500).json({message:error.message})
    }
})

module.exports=router;




