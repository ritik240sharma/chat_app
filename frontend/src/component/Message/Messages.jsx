import React from 'react'
import Top from "./Top.jsx"
import Middle from './Middle.jsx'
import MessageInput from "./MessageInput.jsx"
export default function Messages() {
  return (
    <div className='bg-white'>
      <Top />
      <hr/>
      <Middle />
      <hr/>
      <MessageInput />
    </div>
  )
}
