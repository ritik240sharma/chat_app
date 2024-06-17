import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import useConversation from '../zustand/useConversation';
import notification from "../assets/sound/notification.mp3"
import useGroups from '../zustand/useGroups';
function useListenMessage() {
  const{socket}=useSocketContext();
  const{messages,SetMessages}=useConversation();
  const{messages:groupMessages,SetMessages:SetGroupMessages,selectedGroup}=useGroups()

  useEffect(()=>{
    socket.on("newMessage",(x)=>{
       if(!messages.error)
        {SetMessages([...messages,x])}
        const sound=new Audio(notification)
        sound.play()
    })
    return ()=>socket?.off("newMessage");
  },[socket,SetMessages,messages])

  useEffect(()=>{
    socket.on("groupMessage",(x)=>{
      console.log("mess",x)
        SetGroupMessages((groupMessages) => [...groupMessages, x]);
        const sound=new Audio(notification)
        sound.play()
    })
    return ()=>socket?.off("groupMessage");
  },[socket,SetGroupMessages,groupMessages])

}

export default useListenMessage