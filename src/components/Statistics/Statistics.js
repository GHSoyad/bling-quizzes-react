import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {

    const loaderData = useLoaderData();
    const data = loaderData.data;
    console.log(data);

    return (
        <div className='container card-large'>
            <h2>Quiz Number Statistics</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data} margin={{ left: -35 }}>
                    <Line type="monotone" dataKey="total" stroke="#ff2000"></Line>
                    <CartesianGrid strokeDasharray="10" stroke='#0c102230'></CartesianGrid>
                    <XAxis dataKey="name" stroke='#0c1022'></XAxis>
                    <YAxis stroke='#0c1022'></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;