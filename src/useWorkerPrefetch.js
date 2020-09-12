import { useEffect } from 'react';
import { queryCache } from 'react-query';
export const useWorkerPrefetch = (key) => {
    useEffect(() => {
        const eventHandler = () => {
            queryCache.setQueryData(
                key,
                JSON.parse(localStorage.getItem(`query-${key}`))
            );
        };

        window.addEventListener(`query-${key}`, eventHandler);

        return () => {
            window.removeEventListener(`query-${key}`, eventHandler);
        };
    }, [key]);
};
