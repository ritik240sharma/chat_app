import { IoSearchOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { NavLink} from "react-router-dom";
import { useAuthContext } from "../../context/Auth_context";
import useConversation from "../../zustand/useConversation";
import GetConversation from '../../hooks/getConversation'
import { useState } from "react";
import toast from "react-hot-toast";


  function SearchBar(){
    const {Setlocaldata}=useAuthContext()
    const {selectedConversation,SetselectedConversation}=useConversation()
    const {UseConversation:users}=GetConversation()
    const[Input,SetInput]=useState("");

    async function HandleChange()
     {   
        const response=await fetch("/api/auth/logout",{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          }
          })
          localStorage.removeItem("chat-user");
          Setlocaldata(null);
          const data= await response.json();
          // console.log(data)
    }

    function Handlechange(e){
       e.preventDefault();
       const SearchUser=users.find((x)=>x.fullname.toLowerCase().includes(Input.toLowerCase()))
       if(!SearchUser){
        toast.error("user not found")
       }else{
         SetselectedConversation(SearchUser)
         
       }
       SetInput("");
    }


    




  return (<>
      <div className=" max-w-96 w-full flex content-center justify-center gap-3 p-3">
          <form className="bg-white gap-2 border flex w-full rounded-md pl-2" >
       	  	<input type='text' value={Input} placeholder='Search user' onChange={(e)=>SetInput(e.target.value)} className=' focus:outline-none max-w-80 h-10 ml-2' />
               <span className="m-2"><button onClick={(e)=>Handlechange(e)}><IoSearchOutline /></button></span>
          </form>
          <span className="flex content-center justify-center p-2"><button onClick={()=>HandleChange()}><TiThMenu /></button> </span>
      </div>
</>)
}

export default SearchBar