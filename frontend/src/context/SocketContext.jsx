import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./Auth_context";
import io from "socket.io-client";
import useGroups from "../zustand/useGroups";

const SocketContext = createContext();

function useSocketContext() {
  return useContext(SocketContext);
}

function SocketContextProvider({ children }) {
  const [socket, setsocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { localdata } = useAuthContext();
  const {selectedGroup}=useGroups()
  useEffect(() => {
    if (localdata) {
      const socket = io("https://natte.onrender.com", {
        query: {
          userId: localdata.id,
          groupId:selectedGroup.id
        },
      });
      setsocket(socket);
      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });
      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setsocket(null);
      }
    }
  }, [localdata,selectedGroup]);
  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
}

export { SocketContextProvider, useSocketContext };
