import  {  createServer } from 'http'
import express from 'express'
import cors from "cors"
import {Server} from 'socket.io'

const app=express();
const server=createServer(app);
const io=new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        method:"POST,GET,PUSH,HEAD,PATCH",
    }
})
const userSocketMap={};
function getReceiverSocketId(receiverId){
   return userSocketMap[receiverId]
}

io.on('connection',(socket)=>{

    console.log("user connected",socket.id)
    
    const userId=socket.handshake.query.userId;

    if(userId!="undefined")userSocketMap[userId]=socket.id;

    io.emit("getOnlineUsers",Object.keys(userSocketMap))

    socket.on("disconnect",()=>{
        console.log("user disconnected",socket.id)  
        delete userSocketMap[userId]  
        io.emit("getOnlineUsers",Object.keys(userSocketMap))

    })
})

export {app,io,server,getReceiverSocketId}

