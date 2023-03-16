import { useContext } from "react"
import { userContext } from "../userContext"

export default function ButtonUsers({user}){
    const {setSelectedUserId} = useContext(userContext)
    
    return(
        <button onClick={() => setSelectedUserId(user.id)} 
        className="bg-white p-1 rounded-lg hover:bg-fuchsia-300">{user.firstName}</button>
    )
}
