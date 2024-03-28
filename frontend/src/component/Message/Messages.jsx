import React from 'react'
import Top from "./Top.jsx"
import Middle from './Middle.jsx'
import MessageInput from "./MessageInput.jsx"
export default function Messages() {
  return (
    <div className='bg-white w-full flex flex-col  '>
      <Top />
      <hr/>
      <Middle />
      <hr/>
      <MessageInput />
    </div>
  )
}
