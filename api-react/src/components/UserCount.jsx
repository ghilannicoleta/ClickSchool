import { useContext } from "react"
import { UserContext } from "../context/userContext"

export default function UserCount(){
    const {usersCount} = useContext(UserContext)
return (
    <div>Number of users: {usersCount}</div>
)
}