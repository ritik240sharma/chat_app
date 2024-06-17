import { useEffect } from "react";
import useGroups from "../zustand/useGroups";

function GetGroupMessages() {
  const { selectedGroup, messages, SetMessages } = useGroups();
  useEffect(() => {
    async function call() {
        const res = await fetch(
          `/api/group/getGroupMessage/${selectedGroup.id}`)
        
        const data = await res.json();
        SetMessages(data);
    }
    call();
     }, [selectedGroup]);
    return messages;
}

export default GetGroupMessages;
