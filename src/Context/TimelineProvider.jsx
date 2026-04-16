import React, { createContext, useState } from 'react';

export const timelineContext = createContext();

const TimelineProvider = ({ children }) => {
    const [storeChats, setStoreChats] = useState([]);

    return (
        <timelineContext.Provider value={[ storeChats, setStoreChats ]}>
            { children }    
        </timelineContext.Provider >
    );
};

export default TimelineProvider;