import React from 'react'
import { BsThreeDotsVertical as Dots} from "react-icons/bs";
import { RiArrowGoBackFill as GoBack } from "react-icons/ri";
import useConversation from '../../zustand/useConversation';
import useGroups from '../../zustand/useGroups';
import DropdownButton from './Dropdown';

function Top() {
  const{selectedConversation, SetselectedConversation}=useConversation();
  const{selectedGroup,SetselectedGroup}=useGroups()
  function call()
  {
    SetselectedGroup("");
    SetselectedConversation("")
  }
  return (
    <div className='flex  w-full h-fit bg-gray-400 border items-center justify-between  '>
       <div className="avatar gap-4 items-center h-fit ml-3">
          <button onClick={()=>call()}><GoBack /></button>
          <div className="  h-10 m-2 mask mask-squircle">
             <img src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-with-curly-hair-brown-hat_1142-42780.jpg?t=st=1717962262~exp=1717965862~hmac=5d5c0366c46b26d26d4c617e1e18d094ca900a04bb7df3950169766698b622f7&w=740" />
          </div>
          <h1 >{selectedConversation.fullname?selectedConversation.fullname:(selectedGroup.name)}</h1>
       </div>
       <button className='flex mr-3' ><DropdownButton/></button>
    </div>
  )
}

export default Top