import Messages from "../../component/Message/Messages.jsx"
import NoMessage from "../../component/Message/NoMessage.jsx"
import StartConversation from "../../component/Message/StartConversation.jsx"
import SideUser from "../../component/SideUser/SideUser.jsx"
import getConversation from "../../hooks/getConversation.jsx"
import useConversation from "../../zustand/useConversation.jsx"

 function Home() {
  const{selectedConversation}=useConversation()
  return (
    <div className="flex sm:flex-row flex-col w-full ">
         <div className="sm:w-2/5 w-full "><SideUser /></div>
         <div className="sm:w-3/5 w-full ">{selectedConversation.id?<Messages />:<StartConversation/>}</div>
    </div>
  )
}

export default Home