import Messages from "../../component/Message/Messages.jsx"
import SideUser from "../../component/SideUser/SideUser.jsx"
import getConversation from "../../hooks/getConversation.js"
import useConversation from "../../zustand/useConversation.js"

 function Home() {
  const{selectedConversation}=useConversation()
  return (
    <div className="flex">
         <SideUser />
         {selectedConversation.id?<Messages />:""}
         
    </div>
  )
}

export default Home