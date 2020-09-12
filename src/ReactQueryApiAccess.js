import React from 'react';
import { useQuery } from 'react-query';
import { todoQuery } from './todoQuery';
import { useWorkerPrefetch } from './useWorkerPrefetch';

export const ReactQueryApiAccess = () => {
    useWorkerPrefetch('todos');

    const { data, isError, isLoading, isFetched, error } = useQuery(todoQuery);
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
