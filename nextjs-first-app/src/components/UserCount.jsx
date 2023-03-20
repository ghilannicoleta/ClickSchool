import { useUserContext } from "../context/userContext"

export default function UserCount(){
    const {usersCount} = useUserContext()
return (
    <div>Number of users: {usersCount}</div>
)
}