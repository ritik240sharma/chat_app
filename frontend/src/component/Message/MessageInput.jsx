import React, { useEffect, useState } from "react";
import { IoIosSend as Send } from "react-icons/io";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";
import { useAuthContext } from "../../context/Auth_context";

function MessageInput() {
  const{localdata}=useAuthContext()
  const [Input, SetInput] = useState("");
  const { SetMessages, messages, selectedConversation } = useConversation();
  async function HandleChange(e) {
    e.preventDefault();
    const receiverId = selectedConversation.id;
    const senderId = localdata.id;
    const message = Input;
    const checking = Check(receiverId, senderId, message);
    if (!checking) {
      return;
    }
    try {
      const res = await fetch(
        `http://localhost:4000/api/message/send/${receiverId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ receiverId, senderId, message }),
        }
      );

      const data = await res.json();
      SetMessages([...messages, data]);
      console.log(messages);
    } catch (error) {
      console.log(error.body);
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

function Check(receiverId, senderId, message) {
  if (!receiverId) {
    toast.error("user not selected");
    return false;
  }
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
