import React from 'react'
import { IoIosSend as Send } from "react-icons/io";


function MessageInput() {
  return (
    <form className='flex  bg-gray-600 w-full justify-between items-center rounded-md mt-4 p-2'>
        <input type='text' placeholder='Type a message' className='bg-gray-600 text-white  focus:outline-none rounded-md  w-full'  />
        <button><Send  style={{ color: 'black', fontSize: '24px' }} /></button>
    </form>
  )
}

export default MessageInput