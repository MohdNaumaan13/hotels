const mongoose=require('mongoose')
const express=require('express')
mongoose.connect('mongodb://localhost:27017/menu').then(()=>{
    console.log('mongodb connected')
    }).catch((err)=>console.log('mongo err',err))

const menuitemscheema= mongoose.Scheem({
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
