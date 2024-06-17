import { IoSearchOutline } from "react-icons/io5";
import { NavLink, useLocation} from "react-router-dom";
import { useAuthContext } from "../../context/Auth_context";
import useConversation from "../../zustand/useConversation";
import GetConversation from '../../hooks/getConversation';
import { useState } from "react";
import toast from "react-hot-toast";
import useGroups from "../../zustand/useGroups";
import { FaUserGroup as Group } from "react-icons/fa6";
import { MdGroupAdd } from "react-icons/md";
import { IoReturnUpBackSharp as Back } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";



  function SearchBar()
  {
    const{selectedGroup}=useGroups()
    const locate=useLocation();
    const path=locate.pathname;

    const {Setlocaldata}=useAuthContext();
    const {selectedConversation,SetselectedConversation}=useConversation();
    const {UseConversation:users}=GetConversation();
    const[Input,SetInput]=useState("");
    
    async function HandleChange()
     {   
        const response=await fetch("/api/auth/logout",{
        method:"POST",
        headers: 
          {
            "Content-Type": "application/json",
          },
          credentials:'include'
          })
          localStorage.removeItem("chat-user");
          Setlocaldata(null);
          const data= await response.json();
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

  return (
      <div className=" relative bg-red-300  w-full flex  items-center gap-3 p-3 ">
          <form className="bg-white   gap-2 border flex  rounded-md pl-2" >
       	  	<input type='text' value={Input} placeholder='Search user' onChange={(e)=>SetInput(e.target.value)} className=' focus:outline-none max-w-80 h-10 ml-2 w-full' />
               <div className="m-2"><button onClick={(e)=>Handlechange(e)}><IoSearchOutline /></button></div>
          </form>
          <div className="  flex w-full  items-center gap-1 ">
            <span className="flex content-center justify-center p-2"><button onClick={()=>HandleChange()}><BiLogOut className="w-6 h-6 text-gray-300"/></button> </span>
            {path!='/groups'?<NavLink to="/groups"  ><Group className="w-6 h-6 text-gray-300" /></NavLink> :"" }
            <NavLink to="/CreateGroup" ><MdGroupAdd className="w-7 h-7 text-gray-300"/></NavLink> 
            {path==='/groups'?<NavLink to="/" ><Back className=" absolute right-3  top-1/3 w-6 h-6 font-extrabold text-gray-300"/></NavLink> :"" }
          </div>       
      </div>
)
}

export default SearchBar