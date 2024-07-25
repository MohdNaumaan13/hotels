const express=require('express')
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/tweet').then(()=>{
    console.log('mongodb connected')
    }).catch((err)=>console.log('mongo err',err))

// Schema
const usersschema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
}) 
 module.exports=mongoose.model('user',usersschema)
