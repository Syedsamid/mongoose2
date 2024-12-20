import express from "express";
import adminModel from "../../models/Admin/Admin.js";

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
        let check = await adminModel.find({lastname: "zeeshan"});
        console.log(check);
        res.status(200).json(check)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})


router.put("/updateadmin",async(req,res)=>{
    try {
        let check = await adminModel.updateOne(
            { firstname: "hussain" },
            { $set: { email: "suhail@code.in" } }
          );
          res.status(200).json({msg:"data updated of user"})
          console.log(check)

    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})


router.delete("/admindeleteOne",async(req,res)=>{
    try {
        let deleteuserone = await adminModel.deleteOne({
            firstname: "samid", 
        })
        res.status(200).json({msg:"user data deleted"})
        console.log(deleteuserone);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

export default router