import React, { useEffect, useState } from "react";
import { IoIosSend as Send } from "react-icons/io";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";
import { useAuthContext } from "../../context/Auth_context";
import useListenMessage from "../../hooks/useListenMessage";
import { SendtoGroup, SendtoUser } from "../../hooks/useSendMessages";
import useGroups from "../../zustand/useGroups";


function MessageInput() {
  const { localdata } = useAuthContext();
  const [Input, SetInput] = useState("");
  const { SetMessages, messages, selectedConversation } = useConversation();
  const {SetMessages:SetGroupMessages,selectedGroup,messages:groupmessages}=useGroups();
  
  async function HandleChange(e) 
  {
    e.preventDefault();
    const receiverId = selectedConversation.id;
    const senderId = localdata.id;
    const message = Input;
    const checking = Check( senderId, message);
     if (!checking) {
      return;
    }
    
    if (receiverId) 
    {
      try 
      {
        const res = await SendtoUser({ receiverId, senderId, message });
        const data = await res.json();
        SetMessages([...messages, data]);
      }
      catch (error)
      {
        console.log("error",error.body);
      }

    }
    else
    {
       try
       {
        const group_id=selectedGroup.id
        const sender_id=localdata.id
        const res = await SendtoGroup({group_id,sender_id, message });
        const data = await res.json();
        SetGroupMessages([...groupmessages,...data]);
       }
       catch(error)
       {
        console.log(error.body);
       }
    }

    SetInput("");

  }

  return (
    <form
      onSubmit={(e) => HandleChange(e)}
      className="flex  bg-gray-600 w-full justify-between items-center rounded-md mt-4 p-2"
    >
      <input
        type="text"
        value={Input}
        placeholder="Type a message"
        className="bg-gray-600 text-white  focus:outline-none rounded-md  w-full"
        onChange={(e) => SetInput(e.target.value)}
      />
      <button>
        <Send style={{ color: "black", fontSize: "24px" }} />
      </button>
    </form>
  );
}

function Check( senderId, message) {
  if (!senderId) {
    toast.error("sender not defined");
    return false;
  }
  if (!message) {
    toast.error("message is empty");
    return false;
  }
  return true;
}
export default MessageInput;
