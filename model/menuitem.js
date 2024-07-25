const mongoose=require('mongoose')
const express=require('express')
 

mongoose.connect('mongodb://localhost:27017/menu').then(()=>{
    console.log('mongodb connected io')
    }).catch((err)=>console.log('mongo err',err))


// Schema
const menuitemScheema = new mongoose.Schema({
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



// const menuitemScheema= new mongoose.Scheema({
//     name:{
//         type:String,
//         required:true,
//     },
//     price:{
//         type:Number,
//         required:true
//     } ,   
//     taste:{
//         type:String,
//         enum:['sour','sweet','spicy'],
//         required:true
//     },
//     is_drink:{
//         type:Boolean,
//         default:false,
//     },
//     ingrediants:{
//         type:[String],
//         default:[]
//     },
//     num_sales:{
//         type:Number,
//         default:0
//     }
//     });
    
const MenuItem= mongoose.model('menuitem',menuitemScheema)
module.exports=MenuItem;