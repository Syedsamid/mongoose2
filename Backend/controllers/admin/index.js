import express from "express";
import adminModel from "../../models/Admin/Admin.js";
import userModel from "../../models/Users/Users.js";

const router = express.Router();


router.post("/addadmin",async(req,res)=>{
    try {
        let userInput = req.body
        console.log(userInput)
        await adminModel.create(userInput)
        res.status(200).json(userInput)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})


router.get("/getalladmin",async (req,res)=>{
    try {

      let allData = await adminModel.find({});
      console.log(allData);

      res.status(200).json(allData)  
        
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:error})
    }
})

router.get("/getoneadmin",async(req,res)=>{
    try {
        let check = await adminModel.find({profession: "Sr. Engineer"});

        console.log(check);
        res.status(200).json(check)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})


router.get("/getone/:profession",async(req,res)=>{
    try {
        let userInput = req.params.profession

        console.log(userInput);
        let check = await adminModel.find({profession:userInput})
        res.status(200).json({msg: check})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})


router.put("/updateadmin/:pro",async(req,res)=>{
    try {
        let userParam = req.params.pro;
        let whattoUpdate = req.body;

        console.log(userParam);
        console.log(whattoUpdate);

        let check = await adminModel.updateOne(
            { email: userParam },
            { $set: whattoUpdate}
          );
          res.status(200).json({msg:"Your userdata updated"})
          console.log(check)

    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})


router.delete("/admindeleteOne/:id",async(req,res)=>{
    try {
        let userId = req.params.id;
        let deleteuserone = await adminModel.deleteOne({
            _id: userId, 
        })
        res.status(200).json({msg:"user data deleted"})
        console.log(deleteuserone);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

router.delete("/deletealladmins",async(req,res)=>{
    try {
        let check = await adminModel.deleteMany({})
        console.log(check);
        res.status(200).json({msg:"All the admins are deleted"})
        } catch (error) {
            console.log(check);
        console.log(error);
        res.status(500).json({msg:error})
    }
})

export default router