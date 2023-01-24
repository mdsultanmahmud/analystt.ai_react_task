import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const userDetails = useLoaderData()
    return (
        <div>
            <h1>show details information about {userDetails.name}</h1>
        </div>
    );
};

export default Details;