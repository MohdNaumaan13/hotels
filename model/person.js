const express=require('express')
const mongoose=require('mongoose')
const bodyparser=require('body-parser')

const router=express.Router();
mongoose.connect('mongodb://localhost:27017/menu').then(()=>{
    console.log('mongodb  ho gya mere bhi')
    }).catch((err)=>console.log('mongo err',err))

// Schema
const menuitemscheema= new mongoose.Scheema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    } ,   
    taste:{
        type:String,
        enum:['sour','sweet','spicy'],
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false,
    },
    ingrediants:{
        type:[String],
        default:[]
    },
    num_sales:{
        type:Number,
        default:0
    }
    });
    const MenuItem=mongoose.model('menuitem',menuitemscheema)
    module.exports=MenuItem;
    
router.post('/',async(req,res)=>{
    try{
    const info=req.body;
     // ctreate a new item using mongoose model
    const newItem=new Menu(info)
    const result=await newItem.save()
  
    res.status(201).json({msg:"item is created"})
    console.log(result)
  }
  
  
  catch(err){
    console.log(err)
    res.status(500).json({msg:"server err yr"})
  }
  })
  router.get('/',async(req,res)=>{
    try{
   
   let person=await Menu.find();
    res.status(200).json(person)
  }
  catch(err){
  
    console.log(err)
  res.status(500).json({err:"internal server err"})
  }
  })
module.exports=router