var express = require('express');
var router = express.Router();
const {Grocery} = require('../models/grocerLists');

/* GET users listing. */
router.get('/getAll',async function(req, res, next) {
  const grocery = await Grocery.find();
  res.send(grocery);
});

router.post(`/add`,async (req,res )=>{
   let grocery = new Grocery({
    groceryItems: req.body.groceryItems,
     isPurchased: req.body.isPurchased,
 })

 grocery = await grocery.save();

 
 if(!grocery) 
 return res.status(500).send('The product cannot be created')

 res.send({result: "success"});

 
 })

 router.put('/updatePurchase',async (req, res)=> {
   
    Grocery.findOneAndUpdate(
      {_id:  req.body._id},
      {isPurchased:req.body.isPurchased},
       { new: true},
       function(err){
           if(err){
               consloe.log(err);
           }
           else
            res.send({result:"success"});
       }
   );
 
   });
   router.delete('/deleteGrocery',  (req, res)=>{
    Grocery.findOneAndRemove({_id:req.body._id}, function(err){
       if(err){
           console.log(err);
       }
       else{
           res.send({result:"success"});
       }
   });  
})
 
module.exports = router;
