function Login(){
    
    return<>
        <div className='flex flex-col items-center justify-center  '>
 			<div className='w-[400px] p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
 				<h1 className='text-3xl font-semibold text-center text-gray-300'>
 					Login
 					<span className='text-cyan-400'> ChatApp</span>
 				</h1>
 				<form>
 					<div>
 						<label className='label p-2'>
 							<h1 className='text-base label-text'>Username</h1>
 						</label>
 						<input type='text' placeholder='Enter username' className='w-full active:outline-cyan-400 input input-bordered h-10' />
 					</div>
 					<div>
 						<label className='label'>
 							<span className='text-base label-text'>Password</span>
 						</label>
 						<input
 							type='password'
 							placeholder='Enter Password'
 							className='w-full p-3 focus:outline-none active:outline-cyan-400 border rounded-md h-10'
 						/>
 					</div>
                    
 					<a href='#' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
 						{"Don't"} have an account?
 					</a>
 					<div>
 						<button className='w-full rounded-md p-1 mt-2 active:bg-black active:text-white  bg-cyan-400 '>Login</button>
 					</div>
 				</form>
 			</div>
 		</div>
 	
    </>
}
export default Login