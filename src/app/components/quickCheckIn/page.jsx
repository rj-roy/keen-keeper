"use client";
import { useInteractions } from "@/app/context/dContext";
import { MessageCircle, PhoneCall, Timer, VideoIcon } from "lucide-react";

const QuickCheckIn = ({ name }) => {
    const { interactions, setInterActions } = useInteractions();

    const selectedFriend = interactions.filter(
        (f) => f.name === name
    );

    // const exist = interactions.some((f)=> f.name===name)
    // console.log(exist);

    const handleQuickCheck = (ctv) => {
        const newInteraction = {
            id: Date.now(),
            ctv,
            name,
            description: `${ctv} with ${name}`,
            date: new Date().toLocaleDateString()
        };
        setInterActions([newInteraction, ...interactions]);
    };

    return (
        <div className="bg-gray-200 p-6 rounded-xl space-y-3 grid">
            <div>
                <h4 className="text-xl font-medium">Quick Check-In</h4>
            </div>

            <div className="flex justify-center gap-4">
                <div
                    onClick={() => handleQuickCheck("Call")}
                    className="bg-white p-7 cursor-pointer text-center rounded-xl w-full mx-auto flex flex-col justify-center items-center space-y-2">
                    <PhoneCall />
                    <p className="text-gray-600">Call</p>
                </div>

                <div
                    onClick={() => handleQuickCheck("Text")}
                    className="bg-white p-7 cursor-pointer text-center rounded-xl w-full mx-auto flex flex-col justify-center items-center space-y-2">
                    <MessageCircle />
                    <p className="text-gray-600">Text</p>
                </div>

                <div
                    onClick={() => handleQuickCheck("Video")}
                    className="bg-white p-7 cursor-pointer text-center rounded-xl w-full mx-auto flex flex-col justify-center items-center space-y-2">
                    <VideoIcon />
                    <p className="text-gray-600">Video</p>
                </div>
            </div>

            <div>
                <div className="bg-white p-6 rounded-xl space-y-2">
                    <div className="flex justify-between items-center border-b border-b-gray-300 pb-5">
                        <h4 className="text-xl font-medium">Recent Interactions</h4>
                        <button className="p-1 px-3 border border-gray-400 rounded-sm flex items-center justify-center font-medium cursor-pointer gap-2">
                            <Timer />
                            Full History
                        </button>
                    </div>
                    <div className="space-y-4">
                        {selectedFriend.length === 0 ? (
                            <h3 className="text-center font-bold text-red-900 p-5">
                                No History Found !!!
                            </h3>
                        ) : (
                            selectedFriend.map((it, index) => (
                                <div className="text-gray-600 bg-gray-200 p-4 rounded-xl items-center flex" key={index}>
                                    <div className="w-9">
                                        {
                                            it.ctv === "Call" ? (
                                                <PhoneCall />
                                            ) : it.ctv === "Text" ? (
                                                <MessageCircle />
                                            ) : (
                                                <VideoIcon />
                                            )
                                        }
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <div>
                                            <strong>{it.ctv}</strong>
                                            <p className="text-gray-600">{it.description}</p>
                                        </div>
                                        <p>{it.date}</p>
                                    </div>
                                </div>
                            ))
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickCheckIn;