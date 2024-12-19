import express from "express"
import userModel from "../../models/Users/index.js";
const router = express.Router();

router.get("/getallusers",(req,res)=>{
    try {
        console.log("Get all the users");
        res.status(200).json({msg:"hello",
            
                "firstname": "syed samid",
                "lastname": "Suhail Roushan",
                "email": "samid123@gmail.com",
                "age": 23,
                "phone": "+91 80109394098"
            })
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

router.get(".getaall",async(req,res)=>{
    try{
        let users = await userModel.find({firstname:"Ali"});
        res.status(200).json(users);

    }catch(error){
        console.log(error)
        res.status(500).json({msg:error})
    }
})

export default router