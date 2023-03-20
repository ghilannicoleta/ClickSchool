import "./App.css";
import Sidebar from "./components/Sidebar";
import UserProfile from "./components/UserProfile";
import { UserProvider } from "./context/userContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Sidebar />
        <UserProfile />
      </UserProvider>
    </div>
  );
}

export default App;
