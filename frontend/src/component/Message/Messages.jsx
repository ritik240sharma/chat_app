import React from 'react'
import Top from "./Top.jsx"
import Middle from './Middle.jsx'
import MessageInput from "./MessageInput.jsx"
export default function Messages() {
  return (
    <div className='relative h-full  flex flex-col bg-white'>
      <div className='sticky top-0 z-10 bg-red-400  h-fit '><Top className="w-full h-fit"/></div>
      
      <div className='w-full  h-full '>
        <Middle />
      </div>
      <div className='sticky bottom-0  w-full '><MessageInput /></div>
    </div>
  )
}
