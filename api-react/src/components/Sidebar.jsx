import { useContext } from "react";
import { UserContext } from "../context/userContext";
import ButtonUsers from "./ButtonUsers";
import UserCount from "./UserCount";

export default function Sidebar(){
    const {users} = useContext(UserContext)
    return (

    <div className="w-[25%] p-2 bg-pink-400 rounded-sm flex flex-col gap-3"> 
    <UserCount />
       {users.map(user => <ButtonUsers
        key={user.id} 
        user={user} 
        />)}
    </div>  
    )
}