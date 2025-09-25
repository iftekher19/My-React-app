import { use } from "react"

export default function friends({ friendsPromise }){
    const friends = use(friendsPromise)
    return(
        <div>
            <ul>
                {friends.map((f) => (
                    <li>name:{f.name}</li>
                ))}
            </ul>
        </div>
    )
}