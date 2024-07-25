const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/helo').then(()=>{
    console.log('mongodb  ho gya connected')
    }).catch((err)=>console.log('mongo err',err))

// Define the schema for a Person
const personSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    
    work:{
        type:String,
        enum:['chef','manager','waiter'],
        required:true,
    }
});

// Create and export the Person model
module.exports = mongoose.model('prson', personSchema);
