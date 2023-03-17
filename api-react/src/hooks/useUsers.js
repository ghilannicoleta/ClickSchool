import { useState, useEffect } from "react";

export default function useUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((usersResponse) => {
        setUsers(usersResponse.users);
      });
  }, []);

  return users;
}
