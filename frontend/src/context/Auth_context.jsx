import { createContext, useContext, useState } from "react";

const AuthContext=createContext();
function useAuthContext()
{
    return useContext(AuthContext)
}
 function AuthContextfunction({children})
{
    const[localdata,Setlocaldata]= useState(JSON.parse(localStorage.getItem("chat-user"))||null)
    return<AuthContext.Provider value={{Setlocaldata,localdata}}>{children}</AuthContext.Provider>
}

export  { AuthContextfunction ,useAuthContext}
