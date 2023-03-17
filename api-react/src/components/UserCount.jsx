import { useContext } from "react"
import { UserContext } from "../userContext"

export default function UserCount(){
    const {usersCount} = useContext(UserContext)
return (
    <div>Number of users: {usersCount}</div>
)
}