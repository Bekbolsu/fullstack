import "./App.css";

import Routing from "./components/Routing";
import AuthContextProvider from "./context/authContext";
import FavContextProvider from "./context/favContext";
import PostContextProvider from "./context/postContext";

function App() {
  return (
    <AuthContextProvider>
      <PostContextProvider>
        <FavContextProvider>
          <Routing />
        </FavContextProvider>
      </PostContextProvider>
    </AuthContextProvider>
  );
}

export default App;
