import App from "./App";
import { useEffect, useState } from "react"
import User from "./user";

export default function Users() {
    const [users, setUsers] = useState([]);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    return (
        <div className="box">
            <h3>Users: {users.length}</h3>
            {
                users.map(user => <User user={user}></User>)
            }
        </div>
    )
}


/* 
* 1. declare a state to hold data
* 2. use effect call back and dependency array
* 3. use fetch to load data
* 4. set Loaded data to the state
  5. display data on the component
*
*/