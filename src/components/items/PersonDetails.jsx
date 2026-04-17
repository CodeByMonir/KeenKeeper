import React, { Suspense } from 'react';
import { useLoaderData, useParams } from 'react-router';
import PersonCardDetails from './PersonCardDetails';

const PersonDetails = () => {

    const { name } = useParams();

    const dataX = useLoaderData()

    const data = dataX.find(data => data.name == name)

    return (
        <div>            
            <PersonCardDetails data={data} />
        </div>
    );
};

export default PersonDetails;