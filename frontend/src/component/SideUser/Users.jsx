import React, { useEffect } from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext';

export default function Users({fullname,gender,id}) {
  const{selectedConversation,SetselectedConversation}=useConversation();
  const{onlineUsers}=useSocketContext()
  function call(e){
    SetselectedConversation({fullname,gender,id})
    console.log(selectedConversation)
  }
  
  useEffect(()=>{  //used for unmount disselecct user when logout.
    return ()=>SetselectedConversation({})
  },[SetselectedConversation])
  
  const isOnline=onlineUsers.find((x)=>x==id);
  // console.log(onlineUsers,id,isOnline)
  const s=(id===selectedConversation.id?"bg-gray-800 text-white":"bg-white");
  return (
    <div className={`flex  hover:bg-gray-500 hover:text-white justify-between items-center p-2 ${s} `} onClick={(e)=>call(e)} key={id}>
       <div className='flex  items-center gap-3'>
       <div className={`avatar ${isOnline?'online':''}`}>
          <div className="w-14 rounded-full ">
           {
             gender=='female'?
             <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" key={id} alt="user"/>
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
