import useGroups from '../../zustand/useGroups'
import MessageInput from '../Message/MessageInput'
import Middle from '../Message/Middle'
import Top from '../Message/Top'

function GroupMessages() {
  return (
    <div className='relative h-full  flex flex-col bg-white'>
      <div className='sticky top-0 z-10 bg-red-400  h-fit '><Top className="w-full h-fit"/></div>
      
      <div className='w-full  h-full '>
        <Middle />
      </div>
      <div className='sticky bottom-0  w-full '><MessageInput /></div>
    </div>
  )
}

export default GroupMessages