import express from "express"
import dotenv from "dotenv"
import router from "./routes/auth_routes.js";
import { connection } from "./database/db.js";
import router2 from "./routes/message_route.js";
import cookieParser from "cookie-parser";
import users_route from "./routes/users_route.js";
import cors from "cors"
import { app, server } from "./socket/socket.js";
const option={
    origin:"http://localhost:3000",
    method:"POST,GET,PUSH,HEAD,PATCH",
    Credential:true
}

app.use(cookieParser());
app.use(cors(option))
app.use(express.json())

app.use("/api/auth",router)
app.use("/api/message",router2)
app.use("/api/user",users_route)

dotenv.config();

const port=process.env.REACT_APP_PORT||4000;

if(connection())
{
    server.listen(port,()=>{
    console.log(`server connected http://localhost:${port}`)
    })
}
else{
    console.log("error found in /backend/server.js/ if statement")
}
