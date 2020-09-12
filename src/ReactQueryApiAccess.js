import React from 'react';
import { useQuery } from 'react-query';
import { todos } from './queries/todos';

export const ReactQueryApiAccess = () => {
    const { data, isError, isLoading, isFetched, error } = useQuery(todos);
    return (
        <div>
            <h2>Todo list, prefetched API request</h2>
            {isLoading && <div>Loading from api...</div>}
            {isError && <div>Error: {error}</div>}
            {isFetched && (
                <ul>
                    {data.map((x) => (
                        <li key={x.id}>{x.todo}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};
