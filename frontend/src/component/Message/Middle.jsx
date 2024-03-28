import  { useEffect, useRef } from 'react'
import useGetmessages from '../../hooks/useGetmessages'
import { useAuthContext } from '../../context/Auth_context';
import useConversation from '../../zustand/useConversation';

function Middle() {
  const{selectedConversation}=useConversation()
  const messages=useGetmessages();
  const {localdata}=useAuthContext()
  const senderId=localdata.id;
  const last=useRef();
  useEffect(()=>{
    setTimeout(()=>{
      last.current?.scrollIntoView({behavior:"smooth"});
    },500)
  },[selectedConversation])
  return (
    <div className='bg-white p-2 flex-col max-h-[400px] overflow-auto '>
      {
        messages.map((x)=>
        {
          const from_me= senderId===x.sender_id;
          const arrange=from_me?'chat-end':'chat-start'
          return<>
        <div className={`chat ${arrange}`}>
           <div className="chat-header">
             <time className="text-xs opacity-50">{x.created_at}</time>
           </div>
           <div className="chat-bubble m-1">{x.message}</div>
        </div>
      </>
      }
      )
      
      }
          </div>
  )
}

export default Middle