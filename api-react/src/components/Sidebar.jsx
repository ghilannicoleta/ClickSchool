import ButtonUsers from "./ButtonUsers";
import UserCount from "./UserCount";

export default function Sidebar({users}){
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