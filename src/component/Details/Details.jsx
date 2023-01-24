import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Details.css'
const Details = () => {
    const userDetails = useLoaderData()
    const { name, username, email, address, company, website, phone } = userDetails
    console.log(userDetails)
    return (
        <div className='details-container'>
            <h1 className='details-title'>show details information about {name}</h1>
            <div className='details-content'>
                <p><strong>User Name:</strong> {username}</p>
                <p><strong>Email: </strong>{email}</p>
                <p><strong>Website: </strong>{website}</p>
                <p><strong>Phone: </strong>{phone}</p>
                <p><strong>Email: </strong>{email}</p>
                <p><strong>Company Name: </strong>{company.name}</p>
                <address>
                    <p><strong>City: </strong>{address.city}</p>
                    <p><strong>Street: </strong>{address.street}</p>
                    <p><strong>Zipcode: </strong>{address.zipcode}</p>
                    <p><strong>GEO: </strong>
                        <span>Lat: {address.geo.lat}</span>
                        <span>Lng: {address.geo.lng}</span>
                    </p>
                </address>
            </div>
        </div>
    );
};

export default Details;