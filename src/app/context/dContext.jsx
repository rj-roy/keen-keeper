"use client";
import { createContext, useContext, useState, useEffect } from "react";

const InteractionContext = createContext();

export const InteractionProvider = ({ children }) => {
    const [interactions, setInterActions] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem("interactions");
        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (stored) setInterActions(JSON.parse(stored));
    }, []);

    useEffect(() => {
        localStorage.setItem("interactions", JSON.stringify(interactions));
    }, [interactions]);

    return (
        <InteractionContext.Provider value={{ interactions, setInterActions }}>
            {children}
        </InteractionContext.Provider>
    );
};
export const useInteractions = () => useContext(InteractionContext);