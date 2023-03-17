import { createContext, useState } from "react";
import useUsers from "./hooks/useUsers";

export const UserContext = createContext();


export function UserProvider({ children }) {

  const [selectedUserId, setSelectedUserId] = useState(null);
  const users = useUsers();

  const selectUser = users.find((user) => user.id === selectedUserId);
  return (
    <UserContext.Provider value={{users, setSelectedUserId, selectUser, usersCount: users.length}}>
      {children}
    </UserContext.Provider>
  );
}
