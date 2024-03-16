import React from 'react'
import { BsThreeDotsVertical as Dots} from "react-icons/bs";
import { RiArrowGoBackFill as GoBack } from "react-icons/ri";



function Top() {
  return (
    <div className='flex bg-white items-center justify-between p-1  pr-4'>
       <div className="avatar gap-4 items-center p-1">
          <button><GoBack /></button>
          <div className="w-10 mask mask-squircle">
             <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
          <h1>RITIK</h1>
       </div>
       <button ><Dots /></button>
    </div>
  )
}

export default Top