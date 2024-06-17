import { useEffect } from "react";
import useGroups from "../zustand/useGroups"
import { useAuthContext } from "../context/Auth_context";

function GetGroupInfo() {
  const{localdata}=useAuthContext();
  const{SetGroups,Groups,selectedGroup}=useGroups();
  useEffect(()=>{
    async function info()
    {
      const response=await fetch(`/api/group/getGroupInfo/${localdata.id}`)
      const data=await response.json()
      SetGroups(data)
    }
    info();
    },[selectedGroup])
    return Groups;
}

export default GetGroupInfo