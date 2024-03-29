import { useEffect, useState } from "react";
import { useAuthContext } from "../context/Auth_context";

function GetConversation() {
  const [UseConversation, SetUseConversation] = useState([]);
  const{localdata}=useAuthContext();
  useEffect(() => {
    async function Useconversation() {
      const response = await fetch("http://localhost:4000/api/user",{
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(localdata),
      });
      const data = await response.json();
      console.log(data);
      SetUseConversation(data);
    }
    Useconversation();
  }, []);

  return { UseConversation };
}

export default GetConversation;


