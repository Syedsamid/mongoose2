import express from "express";
import config from "config";

import "./utils/dbConnect.js"

// Import Routing here
import userRouter from "./controllers/users/index.js";
import adminRouter from "./controllers/admin/index.js";

const app = express();
const PORT = config.get("PORT");

app.use(express.json());

app.get("/",(req,res)=>{
    try{
        res.status(200).json({msg:"hello world"})
    } catch(error){
        console.log(error);
        res.status(500).json({msg:error})
    }
});

app.use("/users",userRouter);
app.use("/admin",adminRouter);


app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`);
})

