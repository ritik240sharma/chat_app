import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import useGetmessages from './useGetmessages';
import useConversation from '../zustand/useConversation';
import notification from "../assets/sound/notification.mp3"
function useListenMessage() {
  const{socket}=useSocketContext();
  const{messages,SetMessages}=useConversation();

  useEffect(()=>{
    socket?.on("newMessage",(x)=>{
        SetMessages([...messages,x])
        const sound=new Audio(notification)
        sound.play()
    })
    return ()=>socket?.off("newMessage");
  },[socket,SetMessages,messages])

}

export default useListenMessage