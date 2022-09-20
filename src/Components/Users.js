import { useState } from "react";

const Users = () => {
    const[users, setUsers] = useState();
  return (
    <article>
        <div>Users</div>
        <ul>
        {users?.length ?(users.map((user,i) => <li key={i}>{user?.username}</li>)) : <div>No users</div>}
        </ul>
    </article>
    
  )
}

export default Users;