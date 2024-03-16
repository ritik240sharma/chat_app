import React from 'react'

export default function Users() {
  return (
    <div className='flex bg-white  justify-between items-center p-2'>
       <div className='flex  items-center gap-3'>
       <div className="avatar online">
          <div className="w-14 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="user"/>
          </div>
       </div>
       <span>RITIK</span>
       </div>
       <span className='bg-green-500   rounded-full h-fit p-1 px-2 '>4</span>

    </div>
  )
}
