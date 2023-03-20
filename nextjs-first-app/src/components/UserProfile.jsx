import { useUserContext } from "../context/userContext";

export default function UserProfile(){
    const {selectUser: user, setSelectedUserId} = useUserContext()

    if(!user){
        return null
    }

    return (
        <div className="bg-indigo-300 rounded-sm p-4 w-[500px]">
            <img className="pb-6 m-[auto]" alt="User avatar" src={user.image}></img>
            <h2>Name: {user.firstName} {user.lastName}</h2>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Birth date: {user.birthDate}</p>
            <p>Height: {user.height}</p>
            <p>Weight: {user.weight}</p>
            <p>Eye Color: {user.eyeColor}</p>
            <p>hair: {user.hair.color} {user.hair.type}</p>
            <p>Address: {user.address.address}</p>
            <p>City: {user.address.city}</p>
            <p>Postal code: {user.address.postalCode}</p>
            <p>University: {user.university}</p>
            <button onClick={() => setSelectedUserId(null)} 
            className="border-solid border-2 border-while rounded-lg text-center p-2 mt-4 hover:bg-fuchsia-300" > Clear selected user 
            </button>
        </div>
    )
}


