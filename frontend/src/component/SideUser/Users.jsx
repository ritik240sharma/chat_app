import React, { useEffect } from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext';

export default function Users({fullname,gender,id}) {
  const{selectedConversation,SetselectedConversation}=useConversation();
  const{onlineUsers}=useSocketContext();
  function call(e)
  {
    SetselectedConversation({fullname,gender,id})
  }
  useEffect(()=>{ 
    return ()=>SetselectedConversation({})
  },[SetselectedConversation])
  
  const isOnline=onlineUsers.find((x)=>x==id);
  const s=(id===selectedConversation.id?"bg-gray-600 text-white":"bg-white");
  return (
    <div className={`flex w-full  hover:bg-gray-400 hover:text-white justify-between items-center p-2 ${s} `} onClick={(e)=>call(e)} key={id}>
       <div className='flex  items-center gap-3'>
       <div className={`flex avatar ${isOnline?'online':''}`}>
          <div className="w-14 shrink flex rounded-full border-2 border-gray-300  ">
           {
             gender!=='male'?
             <img src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-with-curly-hair-brown-hat_1142-42780.jpg?t=st=1717962262~exp=1717965862~hmac=5d5c0366c46b26d26d4c617e1e18d094ca900a04bb7df3950169766698b622f7&w=740" key={id} alt="user"/>
             :<img src='https://img.freepik.com/free-vector/portrait-boy-with-brown-hair-brown-eyes_1308-146018.jpg' alt='' key={id}/>
           }
          </div>
       </div>
       <span>{fullname}</span>
       </div>
       <span className='bg-green-500   rounded-full h-fit p-1 px-2 '>4</span>
    </div>
  )
}
