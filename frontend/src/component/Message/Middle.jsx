import React from 'react'

function Middle() {
  return (
    <div className='bg-white p-2 flex-col max-h-[400px] overflow-auto '>
      <div className="chat chat-start">
         <div className="chat-header">
           <time className="text-xs opacity-50">12:45</time>
         </div>
         <div className="chat-bubble m-1">You were the Chosen One!</div>
         <div className="chat-bubble m-1">You were the Chosen One!</div>
         <div className="chat-bubble m-1">You were the Chosen One!</div>
         <div className="chat-bubble m-1">You were the Chosen One!</div>
         <div className="chat-bubble m-1">You were the Chosen One!</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-header">
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble m-1">I hate you!</div>
        <div className="chat-bubble m-1">I hate you!</div>
        <div className="chat-bubble m-1">I hate you!</div>
        <div className="chat-bubble m-1">I hate you!</div>
      </div>
          </div>
  )
}

export default Middle