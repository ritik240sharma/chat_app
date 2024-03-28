import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../context/Auth_context.jsx";

async function useSignup(user) {
  if (!CheckUser(user)) return;
  try {
    const response = await fetch("http://localhost:4000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    if (data.error) return data;
    else return data;
  } catch (error) {
    toast.error(error.message);
  }
}

function CheckUser({
  confirmpassword,
  email,
  fullname,
  gender,
  password,
  picurl,
  username,
}) {
  if (confirmpassword !== password) {
    toast.error("password didn't match ");
    return false;
  }
  // if(password.length<8){
  //   toast.error("password  must have at least 8 character")
  //   return false;
  // }
  return true;
}

export default useSignup;
