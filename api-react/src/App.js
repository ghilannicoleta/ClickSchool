import "./App.css";
import Sidebar from "./components/Sidebar";
import UserProfile from "./components/UserProfile";
import React, { useEffect, useState } from "react";
import { UserProvider } from "./userContext";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((usersResponse) => {
        setUsers(usersResponse.users);
      });
  }, []);

  // function onUserSelected(userID) {
  //   setSelectedUserId(userID);
  // }

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
