import "./App.css";
import Sidebar from "./components/Sidebar";
import UserProfile from "./components/UserProfile";
import { UserProvider } from "./userContext";
import useUsers from "./hooks/useUsers";

function App() {
  const users = useUsers();

  return (
    <div className="App">
      <UserProvider users={users}>
        <Sidebar users={users} />
        <UserProfile />
      </UserProvider>
    </div>
  );
}

export default App;
