import express from "express"
import dotenv from "dotenv"
import router from "./routes/auth_routes.js";
import { connection } from "./database/db.js";

const app=express();
app.use(express.json())
app.get("/",(req,res)=>{
    console.log("sdfsd")
    res.send("sdfs")
})
app.use("/api",router)
dotenv.config();

const port=process.env.REACT_APP_PORT||4000;

if(connection())
{
    app.listen(port,()=>{
    console.log(`server connected http://localhost:${port}`)
    })
}
else{
    console.log("error found in /backend/server.js/ if statement")
}
