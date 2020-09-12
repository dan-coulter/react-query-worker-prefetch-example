import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
export const SimulateLoadingDelay = ({ children }) => {
    const [delayFinished, setDelayFinished] = useState(false);

    useEffect(() => {
        if (!delayFinished) {
            setTimeout(() => {
                setDelayFinished(true);
            }, 3000);
        }
    }, [delayFinished]);

    if (delayFinished) {
        return <>{children}</>;
    } else {
        return <div>Loading the page content...</div>;
    }
};
