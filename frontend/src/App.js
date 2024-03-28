import Path from "./Routing/Path.jsx";
import { AuthContextfunction } from "./context/Auth_context.jsx";
function App() {
  return (<>
       <AuthContextfunction>
       <Path />
       </AuthContextfunction>
       </>
  );
}

export default App;
