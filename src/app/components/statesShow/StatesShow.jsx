import Loading from "@/app/components/statesShow/Loading";
import InteractionsThisMonth from "./interactionsState/InteractionsThisMonth";
import NeedAttention from "./interactionsState/NeedAttention";
import OnTrack from "./interactionsState/OnTrack";
import Total from "./interactionsState/Total";
import { Suspense } from "react";

const StatesShow = () => {
    // const today = new Date();
    // const daysInCurrentMonth = today.getDate();

    // const total = friends.length;
    // const onTrack = friends.filter(f => f.status === "on-track").length;
    // const needAttention = friends.filter(f => f.status === "overdue").length;
    // const interActionsThisMonth = friends.filter(f => f.days_since_contact <= daysInCurrentMonth).length;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-20">
            <div className="bg-white grid place-content-center text-center text-gray-600 gap-2 p-5 rounded-xl shadow-2xl border border-gray-300">
                <Suspense fallback={ <Loading/> }>
                    <Total />
                </Suspense>
                <p>Total Friends</p>
            </div>
            <div className="bg-white grid place-content-center text-center text-gray-600 gap-2 p-5 rounded-xl shadow-2xl border border-gray-300">
                <Suspense fallback={ <Loading/> }>
                    <OnTrack />
                </Suspense>
                <p>On Track</p>
            </div>
            <div className="bg-white grid place-content-center text-center text-gray-600 gap-2 p-5 rounded-xl shadow-2xl border border-gray-300">
                <Suspense fallback={ <Loading/> }>
                    <NeedAttention />
                </Suspense>
                <p>Need Attention</p>
            </div>
            <div className="bg-white grid place-content-center text-center text-gray-600 gap-2 p-5 rounded-xl shadow-2xl border border-gray-300">
                <Suspense fallback={ <Loading/> }>
                    <InteractionsThisMonth />
                </Suspense>
                <p>Inter Actions This Month</p>
            </div>
        </div>
    );
};

export default StatesShow;