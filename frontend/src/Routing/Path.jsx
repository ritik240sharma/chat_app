import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home.jsx'
import Login from '../pages/Login/Login.jsx'
import Signup from '../pages/Signup/Signup.jsx'
import Error from "../pages/Error.jsx"
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from '../context/Auth_context.jsx'

function Path() {
  const {localdata}=useAuthContext();
  return (<>
    <Routes>
        <Route path='/' element={localdata?<Home/>:<Navigate to="/login" />}/>
        <Route path='/login' element={!localdata?<Login/>:<Navigate to="/" />}/>
        <Route path='/signup' element={!localdata?<Signup/>:<Navigate to="/"/>}/>
        <Route path='*' element ={<Error />} />
    </Routes>
    <Toaster/>
    </>
  )
}

export default Path