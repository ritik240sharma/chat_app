import React from 'react'
import SearchBar from './SearchBar'
import Users from './Users.jsx'
import GetConversation from '../../hooks/getConversation'


export default function SideUser() {
  const {UseConversation:users}=GetConversation()
  return (
    <div className="relative  flex flex-col border-2 min-w-fit  border-gray-300 shadow-stone-700 shadow-lg  w-full h-full">
        <div className='sticky top-0 z-10'><SearchBar /></div>
        <div className='flex flex-col w-full overflow-auto h-[90vh] '>
        {
          users.map(x=>{
          return <><Users fullname={x.fullname} gender={x.gender} id={x.id}/><hr></hr></>
          })
        }
        <div className='mt-2 w-full flex font-bold justify-center items-center'>...No More Users...</div>
        </div>
    </div>
  )
}
