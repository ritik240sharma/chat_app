import Path from "./Routing/Path.jsx";
import { AuthContextfunction } from "./context/Auth_context.jsx";
import { SocketContextProvider } from "./context/SocketContext.jsx";
function App() {
  return (<>
       <AuthContextfunction>
       <SocketContextProvider>
       <Path />
       </SocketContextProvider>
       </AuthContextfunction>
       </>
  );
}

export default App;
