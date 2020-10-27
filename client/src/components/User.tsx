import React from 'react'
import { Link } from 'react-router-dom';

const User = () => {
    return (
        <>
            <tr>
                <td>1</td>
                <td>Alvin delapena</td>
                <td>Eclair eghjkk</td>
                <td>serge_kenne@mail.ru</td>
                <td>
                    <Link to="user/:id" className="waves-effect waves-light btn green darken-3">View</Link>
                    <Link to="/edit" className="waves-effect waves-light btn purple">Edit</Link>
                    <a className="waves-effect waves-light btn red">Delete</a>
                </td>
            </tr>
        </>
    );
}

export default User
