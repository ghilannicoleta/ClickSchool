import ButtonUsers from "./ButtonUsers";

export default function Sidebar({users, onUserSelected}){
    return (
        
    <div className="w-[25%] p-2 bg-pink-400 rounded-sm flex flex-col gap-3"> 
       {users.map(user => <ButtonUsers
        key={user.id} 
        user={user} 
        onUserSelected={onUserSelected}
        />)}
    </div>  
    )
}