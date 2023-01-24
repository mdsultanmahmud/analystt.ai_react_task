import React, { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import { Triangle } from 'react-loader-spinner';
import './Home.css'
const Home = () => {
    const [users, setUsers] = useState({})
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        setLoader(true)
        fetch('https://jsonplaceholder.typicode.com/users')

            .then(res => res.json())
            .then(data => {
                setUsers(data)
                if (data) {
                    setLoader(false)
                }
            })
    }, [])
    if (loader) {
        return <div className='loader-container'>
            <Triangle
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    }
    return (
        <div>
            <h1 className='title'>All Users Information</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>About</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 &&
                        users.map(user => {
                            const { id, name, email, website, company } = user
                            return <tr key={id}>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{website}</td>
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