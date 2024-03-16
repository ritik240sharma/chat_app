import React from 'react'
import SearchBar from './SearchBar'
import Users from './Users.jsx'
import { TbLogout  as Logout } from "react-icons/tb";


export default function SideUser() {
  return (
    <div className="flex flex-col bg-gray-400 content-center justify-center">
        <SearchBar />
        <Users />
        <hr/>
        <Users />
        <hr/>
        <Users />
        <hr/>
        <Users />
        <hr/>
        <Users />
    </div>
  )
}
