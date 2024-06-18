import { useEffect, useState } from "react";
import { useAuthContext } from "../context/Auth_context";

function GetConversation() {
  const [UseConversation, SetUseConversation] = useState([]);
  const{localdata}=useAuthContext();
  useEffect(() => {
    async function Useconversation() {
      const response = await fetch("/api/user",{
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(localdata),
        credentials:'include'
      });
      const data = await response.json();
      SetUseConversation(data);
    }
    Useconversation();
  }, []);

  return { UseConversation };
}

export default GetConversation;


