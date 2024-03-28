import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./Auth_context";
import io from "socket.io-client";

const SocketContext = createContext();

function useSocketContext() {
  return useContext(SocketContext);
}

function SocketContextProvider({ children }) {
  const [socket, setsocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { localdata } = useAuthContext();
  // console.log(localdata)
  useEffect(() => {
    if (localdata) {
      const socket = io("http://localhost:4000", {
        query: {
          userId: localdata.id,
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
  }, [localdata]);
  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
}

export { SocketContextProvider, useSocketContext };
