import express from "express"
import userModel from "../../models/Users/index.js";
const router = express.Router();

// get all api

router.get("/getallusers",async (req,res)=>{
    try {

        console.log("i came here");

      let allData = await userModel.find({lastname:"test"});
      console.log(allData);

      res.status(200).json(allData)  
        
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:error})
    }
})

router.get("/getoneuser",async(req,res)=>{
    try {
        let check = await userModel.find({ email: "suhail@code.in" });
        console.log(check);
        res.status(200).json(check)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})


router.post("/add",async(req,res)=>{
    try {
        let userInput = req.body
        console.log(userInput)
        await userModel.create(userInput)
        res.status(200).json(userInput)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})


router.put("/updateuser",async(req,res)=>{
    try {
        let check = await userModel.updateOne(
            { email: "suhail@code.in" },
            { $set: { firstname: "hussain" } }
          );
          res.status(200).json({msg:"data updated"})
          console.log(check)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})


router.delete("/userdeleteOne",async(req,res)=>{
    try {
        let deleteuserone = await userModel.deleteOne({
            firstname: "samid", 
        })
        res.status(200).json({msg:"user data deleted"})
        console.log(deleteuserone);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

router.delete("/userdeleteAll",(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }

})

export default router