import path from 'path'
import express from "express"
import dotenv from "dotenv"
import router from "./routes/auth_routes.js";
import { connection } from "./database/db.js";
import router2 from "./routes/message_route.js";
import cookieParser from "cookie-parser";
import users_route from "./routes/users_route.js";
import cors from "cors"
import { app, server } from "./socket/socket.js";
import group_route from "./routes/group_route.js";

dotenv.config();
const option={
    origin: process.env.CLIENT_BASE_URL,
    method:["POST,GET,PUSH,HEAD,PATCH"],
    credentials: true,
}

app.use(cookieParser());
app.use(cors(option))
app.use(express.json())

app.use("/api/auth",router)
app.use("/api/message",router2)
app.use("/api/user",users_route)
app.use("/api/group",group_route)

const __dirname=path.resolve();
app.use(express.static(path.join(__dirname,"/frontend/dist")))
const port=process.env.PORT;


app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})


app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})

if(connection())
{
    server.listen(port,()=>{
    console.log(`server connected http://localhost:${port}`)
    })
}
else{
    console.log("error found in /backend/server.js/ if statement")
}
