import React, { useEffect } from 'react'
import useConversation from '../zustand/useConversation'
import toast from "react-hot-toast";
import { useAuthContext } from "../context/Auth_context";

function useGetmessages() {
    const{messages,selectedConversation,SetMessages}=useConversation();
    const{localdata}=useAuthContext();
    useEffect(()=>{
        async function getmessages(){
            try{
            const res=await fetch(`/api/message/${selectedConversation.id}`,
            {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(localdata),
            })
             const data=await res.json();
            
            SetMessages(data)
            if(data?.error){
                console.log(data.error) 
            }
            }
            catch(error){
                console.log(error.message)
            }
        }
      getmessages();
    },[selectedConversation])

    return messages;
}

export default useGetmessages










