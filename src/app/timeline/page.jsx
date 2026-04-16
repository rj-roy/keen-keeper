"use client";
import { Handshake } from "lucide-react";
import { useInteractions } from "../context/dContext";
import TimeLineDetails from "../components/timelineDetails/page";

const TimeLinePage = () => {
    const {interactions, setInterActions} = useInteractions();
    console.log(interactions);
    return (
        <div className="w-full max-w-6xl mx-auto py-15">
            {
                interactions.map((t, i) => <TimeLineDetails key={i} t={t}/>)
            }
        </div>
    );
};

export default TimeLinePage;