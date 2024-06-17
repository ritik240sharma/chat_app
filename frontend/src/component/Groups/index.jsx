import React from 'react'
import SearchBar from '../SideUser/SearchBar.jsx'
import Users from '../SideUser/Users.jsx'
import SideUser from '../SideUser/SideUser.jsx';
import Groups from './Groups.jsx';
import GroupMessages from './GroupMessages.jsx';
import useGroups from '../../zustand/useGroups.jsx';
function Index() {
  var{selectedGroup}=useGroups()
  return( <div className="flex sm:flex-row flex-col w-screen h-screen bg-red-50 ">
    <div className="sm:w-2/5 w-full h-full"><Groups /></div>
    <div className="sm:w-3/5 w-full h-full text-center flex  justify-center  flex-col  ">{selectedGroup?<GroupMessages/>:<h1 className='animate-bounce text-black font-bold '>Select Group To Start Conversation</h1>}</div>
</div>)
}

export default Index
  