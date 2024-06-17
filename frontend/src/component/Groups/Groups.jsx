import React, { useEffect } from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import getGroupInfo from '../../hooks/getGroupInfo';
import useGroups from '../../zustand/useGroups';
import { useNavigate } from 'react-router-dom';
import GetGroupMessages from '../../hooks/getGroupMessages';
import SearchBar from '../SideUser/SearchBar';

function Groups()
{
  const groups=getGroupInfo();
  const{selectedGroup,SetselectedGroup}=useGroups();

  function call(x)
  {  
     SetselectedGroup(x)
  }
  
  var color="bg-gray-500"


  return (
    <div className='flex felx-col  bg-red-50 border shadow-lg shadow-slate-500 rounded-md  h-screen'>
       <div className='flex flex-col min-w-fit w-full '>
       <SearchBar />
           {
              groups?.map(curr=>{
                 return<div key={curr.id} className={`relative flex flex-col  bg-white pt-3 pl-2 rounded  min-w-fit active:bg-blue-200 hover:bg-gray-300 ${curr.id===selectedGroup.id?color:""}`} onClick={()=>call(curr)} >
                 <div className='grid grid-cols-3 w-full min-w-fit '>
                  <GroupsIcon />
                   <h1 className='select-none'>{curr.name}</h1>
                  <div className=' flex select-none'><h1 className='font-bold text-blue-400 select-none'>Admin: </h1> {curr.fullname}</div>
                 </div>
                 <hr className='mt-6'/>
                 </div>
              })
           }
           <h1 className='mt-3 text-center text-black font-bold'>{groups?.length!==0?"...No more Group present...":"...No Group present..."}</h1>
       </div>
    </div>
  )
}

export default Groups