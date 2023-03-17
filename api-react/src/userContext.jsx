import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children, users }) {

  const [selectedUserId, setSelectedUserId] = useState(null);

  const selectUser = users.find((user) => user.id === selectedUserId);
  return (
    <UserContext.Provider value={{setSelectedUserId, selectUser, usersCount: users.length}}>
      {children}
    </UserContext.Provider>
  );
}
