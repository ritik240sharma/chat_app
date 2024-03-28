import React from 'react'
import SearchBar from './SearchBar'
import Users from './Users.jsx'
import GetConversation from '../../hooks/getConversation'
import useListenMessage from '../../hooks/useListenMessage.js'


export default function SideUser() {
  const {UseConversation:users}=GetConversation()
  return (
    <div className="flex flex-col bg-gray-400 content-center justify-center w-full overflow-auto ">
        <SearchBar />
        <div className='flex flex-col overflow-auto h-[400px]'>
        {users.map((x,index)=>{
          return <Users fullname={x.fullname} gender={x.gender} id={x.id}/>
        })}
        </div>
    </div>
  )
}
