export default function ButtonUsers({user, onUserSelected}){
    return(
        <button onClick={() => onUserSelected(user.id)} 
        className="bg-white p-1 rounded-lg hover:bg-fuchsia-300">{user.firstName}</button>
    )
}
