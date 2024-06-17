import React,{useEffect, useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import Modal from "react-modal";
import {useNavigate} from 'react-router-dom'

import GetConversation from "../../hooks/getConversation";
import { useAuthContext } from "../../context/Auth_context";

function CreateGroup() {
  const back=useNavigate();
  const{localdata}=useAuthContext()
  const {UseConversation}=GetConversation();
  const users=[...UseConversation]
  const [SelectedUser,setSelectedUsers]=useState([]);
  const[count,setcount]=useState(0)
  Modal.setAppElement('#root');
 
  const customStyles = {
    content: {
      height: '100%',
      width: '100%', 
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      position:'fixed',
      backdropFilter: 'blur(1px)',
      backgroundColor: 'gray',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }
  
  const[state,SetState]=useState({
    name:"",
    admin_id:localdata.id,
    member_id:[]
  });

  useEffect(()=>{
     SetState({...state,member_id:SelectedUser})
     setcount(SelectedUser.length)
     console.log(SelectedUser)
  },[SelectedUser])

  function Toggle(x)
  {
      if(SelectedUser.includes(x))
        {
         setSelectedUsers( SelectedUser.filter(curr=>{
            if(curr!==x)return curr;
          }))
        }else{
          setSelectedUsers([...SelectedUser,x])
        }

  }
  
  const HandleChange=async(e)=>{
    e.preventDefault();
    await fetch("/api/group/create_group",{
      method:"POST",
      headers: {
       "Content-Type": "application/json",
       },
       body:JSON.stringify(state),
       credentials: 'include'
      })
      back("/groups")
    }

  const add="bg-blue-500";

  return (
   <div className="flex  flex-col w-screen content-center justify-center items-center p-32" >
     <Modal isOpen={true}  style={customStyles}>
      <button className="font-bold " onClick={()=>back("/groups")}><CloseIcon/></button>
       <div className="  rounded border-black flex-col content-center justify-center flex items-center p-9 gap-7 ">
          <div className="border border-black w-[400px] h-[400px] justify-center content-center flex flex-col align-middle items-center rounded-md gap-9 bg-white">
           <h1 className="text-4xl font-medium text-blue-500">Create Group</h1>
            <form onSubmit={(e)=>HandleChange(e)} className="flex flex-col gap-4" >
              <h1 className="font-bold">Select users:{count}</h1>
              <div  id="" name="company" className=" border-2 rounded border-black  overflow-auto h-[60px] flex flex-col p-0 m-0 gap-1" >
              {
                users.map((curr,index)=>{
                let colors;
                if(SelectedUser.includes(curr.id))
                {
                  colors=add;
                }else
                {
                  colors="";
                }
                return<option  key={index} onClick={()=>Toggle(curr.id)} className={` rounded flex justify-start items-center p-2 px-3 mr-3 ${colors}`}  value={curr.fullname}>{curr.fullname}</option>
                })
              }
              </div>
              <input type="text" value={state.name} onChange={(e)=>SetState({...state,name:e.target.value})}  placeholder="Enter group name" className="h-[45px] p-4 rounded w-[300px] bg-black text-white"/>
              <button  className="border-black border bg-black font-medium text-white w-fit px-3 rounded active:bg-red-400" >SUBMIT</button>
            </form>
            </div>
        </div>
    </Modal>
  </div>
  );
}

export default CreateGroup;

