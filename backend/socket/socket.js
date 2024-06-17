import  {  createServer } from 'http'
import express from 'express'
import {Server} from 'socket.io'

const app=express();
const server=createServer(app);
const io=new Server(server,{
    cors:
    {
      origin:"https://natte.onrender.com",
      method:"POST,GET,PUSH,HEAD,PATCH",
    }
})
const userSocketMap={};
const groupMap={}

function getReceiverSocketId(receiverId)
{
   return userSocketMap[receiverId]
}

function getReceiverGroupId(id)
{
    return groupMap[id]
}

io.on('connection',(socket)=>{

    const userId=socket.handshake.query.userId;
    const gid=socket.handshake.query.groupId;
    console.log("user connected",userId," ",socket.id)
    if(userId!="undefined")userSocketMap[userId]=socket.id;
    if(gid!="undefined")groupMap[gid]=socket.id;
     
    io.emit("getOnlineUsers",Object.keys(userSocketMap))

    socket.on("disconnect",()=>{
        console.log("user disconnected",socket.id)
        delete userSocketMap[userId]  
        io.emit("getOnlineUsers",Object.keys(userSocketMap))
    })
})

export {app,io,server,getReceiverSocketId, getReceiverGroupId}

