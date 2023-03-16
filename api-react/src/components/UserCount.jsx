import { useContext } from "react"
import { userContext } from "../userContext"

export default function UserCount(){
    const {usersLength} = useContext(userContext)
return (
    <div>Number of users: {usersLength}</div>
)
}