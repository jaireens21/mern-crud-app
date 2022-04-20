const mongoose=require('mongoose');//for creating data model

const bookSchema= new mongoose.Schema({
    title:String,
    author:String,
    isbn:String
})

module.exports=mongoose.model('Book',bookSchema);