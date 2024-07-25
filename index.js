const express=require('express')
// it is my server
const app=express()
const usermodel=require('./model')

var mongoose=require('mongoose')


// mongoose connection


// schema
// //Set up default mongoose connection
// var mongoDB = 'mongodb://127.0.0.1/my_database';
// mongoose.connect(mongoDB, { useNewUrlParser: true });
//  //Get the default connection
// var db = mongoose.connection;
// //Bind connection to error event (to get notification of connection errors)
// // db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/idli',((req,res)=>{
    var customized_idli={
        name:'rava idli',
        size:'10 cm diameter',
        is_sambhar:'true',
        is_chutney:'false'

    }

    res.send(customized_idli);
}))
app.get("/create",async(req,res)=>{
   const result= await usermodel.create({
        name:"mohd arham",
        email:"arham@gmail.com",
        age:78


    })
    res.send(result)
    console.log(result)
})

app.listen(8000,()=>console.log('server running'))



