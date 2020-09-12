import { ReactQueryDevtools } from 'react-query-devtools';
import React from 'react';
import { TraditionalApiAccess } from './TraditionalApiAccess';
import { SimulateLoadingDelay } from './SimulateLoadingDelay';
import { ReactQueryApiAccess } from './ReactQueryApiAccess';

export function App() {
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
