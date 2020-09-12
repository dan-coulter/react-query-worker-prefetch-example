import { ReactQueryDevtools } from 'react-query-devtools';
import React from 'react';
import { TraditionalApiAccess } from './TraditionalApiAccess';
import { SimulateLoadingDelay } from './SimulateLoadingDelay';
import { ReactQueryApiAccess } from './ReactQueryApiAccess';
import { useWorkerPrefetch } from './useWorkerPrefetch';

export function App() {
    useWorkerPrefetch('todos');
    return (
        <>
            <SimulateLoadingDelay>
                <TraditionalApiAccess />
                <ReactQueryApiAccess />
            </SimulateLoadingDelay>
            <ReactQueryDevtools initialIsOpen={false} />
        </>
    );
}
