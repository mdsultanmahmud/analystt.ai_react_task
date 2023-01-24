import React, { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
    const [users, setUsers] = useState({})

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h1 className='title'>All Users Information</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Company</th>
                        <th>About</th>
                    </tr>
                </thead>
                <tbody>
                    { users.length > 0 &&
                        users.map(user => {
                            const { id, name, username, email, website, company } = user
                            return <tr key={id}>
                                <td>{name}</td>
                                <td>{username}</td>
                                <td>{email}</td>
                                <td>{website}</td>
                                <td>{company?.name}</td>
                                <td><Link to={`/home/${id}`}><button className='details-btn'>Details</button></Link></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Home;