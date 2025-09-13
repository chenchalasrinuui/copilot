import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_EXAMPLE_DATA } from '../graphql/queries';

const ExampleComponent = () => {
    const { loading, error, data } = useQuery(GET_EXAMPLE_DATA);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Example Data</h1>
            <ul>
                {data.example.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExampleComponent;