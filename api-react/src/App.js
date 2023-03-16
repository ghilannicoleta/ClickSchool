import "./App.css";
import Sidebar from "./components/Sidebar";
import UserProfile from "./components/UserProfile";
import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const selectedUser = users.find((user) => user.id === selectedUserId);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((usersResponse) => {
        setUsers(usersResponse.users);
      });
  }, []);

  function onUserSelected(userID) {
    setSelectedUserId(userID);
  }

  return (
    <div className="App">
      <Sidebar users={users} onUserSelected={onUserSelected} />

      {selectedUser && (
        <UserProfile
          user={selectedUser}
          setSelectedUserId={setSelectedUserId}
        />
      )}
    </div>
  );
}

export default App;
