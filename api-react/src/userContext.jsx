import { createContext } from "react";

export const userContext = createContext();

export function UserProvider({ children, setSelectedUserId, users }) {
  return (
    <userContext.Provider value={{setSelectedUserId, usersLength: users.length}}>
      {children}
    </userContext.Provider>
  );
}
