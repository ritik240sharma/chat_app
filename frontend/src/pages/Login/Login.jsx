import { useState } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom"
import { useAuthContext } from "../../context/Auth_context";
const initial={username:"",password:""}
function Login(){
	const[user,Setuser]=useState(initial)
	const {Setlocaldata} =useAuthContext()
     async function HandleChange(e)
	{
		e.preventDefault();
       const response=await fetch("/api/auth/login",{
		 method:"POST",
		 headers: {
			"Content-Type": "application/json",
		  },
		  body:JSON.stringify(user),
		  credentials: 'include'
	   })
	   const data=await response.json();
	   if(data.error)
	   {
		toast.error(data.error)
	   }
	   else{
		localStorage.setItem("chat-user",JSON.stringify(data))
		Setlocaldata(data)
		Setuser(initial)
	   }
	}
	
    return<>
        <div className='flex flex-col  items-center justify-center  h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
 			<div className='w-[400px] p-6 rounded-lg shadow-2xl shadow-slate-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
 				<h1 className='text-3xl font-semibold text-center text-gray-400'>
 					Login
 					<span className='text-cyan-400'> ChatApp</span>
 				</h1>
 				<form  onSubmit={(e)=>HandleChange(e)}>
 					<div>
 						<label className='label p-2'>
 							<h1 className='text-base label-text'>Username</h1>
 						</label>
 						<input name="username" type='text' onChange={(e)=>Setuser({...user,username:e.target.value})} value={user.username} placeholder='Enter username' className='w-full active:outline-cyan-400 input input-bordered h-10' />
 					</div>
 					<div>
 						<label className='label'>
 							<span className='text-base label-text'>Password</span>
 						</label>
 						<input
						    name="password"
 							type='password'
							 onChange={(e)=>Setuser({...user,password:e.target.value})}
							value={user.password}
 							placeholder='Enter Password'
 							className='w-full p-3 focus:outline-none active:outline-cyan-400 border rounded-md h-10'
 						/>
 					</div>
                    
 					<NavLink to='/signup'className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
 						{"Don't"} have an account?
 					</NavLink>
 					<div>
 						<button className='w-full rounded-md p-1 mt-2 active:bg-black active:text-white  bg-cyan-400 '>Login</button>
 					</div>
 				</form>
 			</div>
 		</div>
 	
    </>
}
export default Login