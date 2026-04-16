"use client";
import { Handshake } from "lucide-react";
import { useInteractions } from "../context/dContext";
import TimeLineDetails from "../components/timelineDetails/page";
import { useState } from "react";

const TimeLinePage = () => {
    const { interactions, setInterActions } = useInteractions();
    console.log(interactions, "int");

    const [filter, setFilter] = useState("");
    const filterData = filter ? interactions.filter((i)=> i.ctv === filter) : interactions;
    console.log(filterData, "fil");

    return (
        <div className="bg-[#f8fafc] w-full">
            <div className="w-full max-w-5xl mx-auto py-10 space-y-4 px-4">
                <h2 className="text-3xl font-bold">Timeline</h2>
                <select
                value={filter}
                onChange={(e)=> setFilter(e.target.value)}
                className="bg-white border border-gray-300 p-3 w-50 text-gray-500">
                    <option value="none">Filter Timeline</option>
                    <option value="Call">Call</option>
                    <option value="Text">Text</option>
                    <option value="Video">Video</option>
                </select>
                { filter === "none" ? 
                    interactions.map((t, i) => <TimeLineDetails key={i} it={t} />) : 
                    filterData.length === 0 ? <div className="h-[50dvh] grid items-center justify-center text-2xl font-bold">Not Found any Data</div> :
                    filterData.map((t, i) => <TimeLineDetails key={i} it={t} />)
                }
            </div>
        </div>
    );
};

export default TimeLinePage;