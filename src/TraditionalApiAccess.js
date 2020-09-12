import React, { useEffect, useState } from 'react';

export const TraditionalApiAccess = () => {
    const [data, setData] = useState([]);
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3001/todos')
            .then((response) => response.json())
            .then(setData);
        setInitialized(true);
    }, [initialized]);

    return (
        <div>
            <h2>Todo list, uncached API Request</h2>
            {data.length ? (
                <ul>
                    {data.map((x) => (
                        <li key={x.id}>{x.todo}</li>
                    ))}
                </ul>
            ) : (
                <div>Loading from api...</div>
            )}
        </div>
    );
};
