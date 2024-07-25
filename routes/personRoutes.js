const express=require('express')
const router= express.Router()
const app =express()

const Menu=require('../model/menuitem')

   

const bodyparser=require('body-parser');
// const Person=require('./Person')
app.use(bodyparser.json())



    
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
// router.get('/:id',async(req,res)=>{
       
  
//   try{
//     const personId=req.params.id;
// if(worktype=='chef'||worktype=='manager'||worktype=='waiter'){
// const response=await Menu.find({work:worktype});
// console.log('data fetched')
// res.status(200).json(response)
// console.log(response)
//  }else{
// res.status(404).json({msg:"invalid worktype"})
//  }}
//   catch(err){
// console.log(err)
// res.status(500).json({msg:"internal server err"})
//       }
// })    

//   const response=req.params.id;
//   const updatedData=req.body;

// })
// routes/userRoutes.js


// Update user by ID
router.put('/:id', async (req, res) => {
//  get id by parms 
    const userId = req.params.id;
  
    const updateData = req.body;

    try {
        // Find user by ID and update
        const updatedUser = await Menu.findByIdAndUpdate(userId, updateData,
          // return the updated doccument
          { new: true});


        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
  console.log('user updatad')
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;

    

module.exports=router



// router.post('/',async(req,res)=>{
//     try{
//     const info=req.body;
//     // ctreate a new item using mongoose model
//     const newItem=new Person(info)
//     const result=await newItem.save()
  
//     res.status(201).json({msg:"item is created"})
//     console.log(result)
//   }
//   catch(err){
//     console.log(err)
//     res.status(500).json({msg:"server err yr"})
//   }
//   })
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
