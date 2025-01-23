const express=require('express')
const router= express.Router();
const jwt=require('jsonwebtoken')

router.use(express.json());
router.use(express.urlencoded({extended:true}))
const blogModel=require('../model/blogModel');

function verifytoken(req,res,next){
    let token=req.headers.token;
    try {
        if(!token)throw 'Unauthorized access';
        else{
            let payload=jwt.verify(token,'blogApp');
            if(!payload) throw 'Unauthorized access';
            next();
        }
    } catch (error) {
        console.log(error);
    }
  
}



    router.get('/',async (req,res)=>{
        try {
            const data=await blogModel.find()
            res.send(data);
        } catch (error) {
            res.send('Failed to fetch data')
        }
    })

    router.post('/addblog',verifytoken, async (req,res)=>{
        try {

            const data= new blogModel(req.body);
            await data.save();
            res.send('Blog added successfully')
        } catch (error) {
            res.send('Failed to add data')
        }
    })

    router.put('/updateblog/:id',verifytoken,async (req,res)=>{
        try {
            const updatedblog=await blogModel.findByIdAndUpdate(req.params.id,req.body);
            if(!updatedblog){
                return res.send('Blog not found')
            }
            res.send('Updated successfully')
        } catch (error) {
            res.send('Failed to update data')
        }
    })

    
    router.delete('/deleteblog/:id',verifytoken,async (req,res)=>{
        try {
            const deletedblog=await blogModel.findByIdAndDelete(req.params.id);
            if(!deletedblogblog){
                return res.send('Blog not found')
            }
            res.send('Deleted successfully')
        } catch (error) {
            res.send('Failed to delete data')
        }
    })
   

module.exports=router;