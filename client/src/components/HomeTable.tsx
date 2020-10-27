import React from 'react'
import User from './User'

const HomeTable = () => {
    return (
        <div>
            <h3>Home page</h3>
            <table className="home-table card blue-grey draken-1 centered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <User />
                    <User />
                    <User />
                    <User />
                    {/* <tr>
                        <td>1</td>
                        <td>Alvin delapena</td>
                        <td>Eclair eghjkk</td>
                        <td>serge_kenne@mail.ru</td>
                        <td>
                            <a className="waves-effect waves-light btn">View</a>
                            <a className="waves-effect waves-light btn purple">Edit</a>
                            <a className="waves-effect waves-light btn red">Delete</a>
                        </td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    );
}

export default HomeTable
