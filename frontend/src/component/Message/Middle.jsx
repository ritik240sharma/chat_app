import { useEffect, useRef, useState } from "react";
import useGetmessages from "../../hooks/useGetmessages";
import { useAuthContext } from "../../context/Auth_context";
import useConversation from "../../zustand/useConversation";
import useListenMessage from "../../hooks/useListenMessage";
import { useParams } from "react-router-dom";
import GetGroupMessages from "../../hooks/getGroupMessages";
import useGroups from "../../zustand/useGroups";
import NoMessage from "./NoMessage"

function Middle() {
  const url = useParams();
  const path = url.pathname;
  const { selectedConversation } = useConversation();
  var messages1 = useGetmessages();
  GetGroupMessages();
  var { messages: messages2, SetMessages, selectedGroup } = useGroups();
  var [messages, setmessages] = useState([]);

  useListenMessage();

  const { localdata } = useAuthContext();
  const senderId = localdata.id;
  const last = useRef();

  useEffect(() => {
    if (messages1 && !messages1.error) {
      setmessages(messages1);
    } else {
      setmessages(messages2);
    }
  }, [messages1, messages2]);

  useEffect(() => {
    setTimeout(() => {
      last.current?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  }, [messages]);

  if(!messages.length)
  {
    return<NoMessage />
  }
  return (
    <div className=" bg-white p-2 flex-col max-h-[85vh] overflow-auto ">
      {messages &&
        messages.map((x) => {
          const from_me = senderId === x.sender_id;
          const arrange = from_me ? "chat-end" : "chat-start";
          return (
            <>
              <div className={`chat ${arrange}`}>
                <div className="chat-header">
                  <time className="text-xs opacity-50">{x.created_at}</time>
                </div>
                <div className="chat-bubble m-1">{x.message}</div>
              </div>
              <div ref={last}></div>
            </>
          );
        })}
    </div>
  );
}

export default Middle;
