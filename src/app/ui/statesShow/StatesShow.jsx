import { getFriends } from "@/app/lib/getFriends";

const StatesShow = async () => {
    const friends = await getFriends();

    const today = new Date();
    const daysInCurrentMonth = today.getDate();

    const total = friends.length;
    const onTrack = friends.filter(f => f.status === "on-track").length;
    const needAttention = friends.filter(f => f.status === "overdue").length;
    const interActionsThisMonth = friends.filter(f => f.days_since_contact <= daysInCurrentMonth).length;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-10">
            <div className="bg-gray-200 grid place-content-center text-center text-gray-600 gap-2 p-5 rounded-xl shadow-2xl border border-gray-300">
                <span className="text-green-950 font-medium text-3xl">
                    {total}
                </span>
                <p>Total Friends</p>
            </div>
            <div className="bg-gray-200 grid place-content-center text-center text-gray-600 gap-2 p-5 rounded-xl shadow-2xl border border-gray-300">
                <span className="text-green-950 font-medium text-3xl">
                    {onTrack}
                </span>
                <p>On Track</p>
            </div>
            <div className="bg-gray-200 grid place-content-center text-center text-gray-600 gap-2 p-5 rounded-xl shadow-2xl border border-gray-300">
                <span className="text-green-950 font-medium text-3xl">
                    {needAttention}
                </span>
                <p>Need Attention</p>
            </div>
            <div className="bg-gray-200 grid place-content-center text-center text-gray-600 gap-2 p-5 rounded-xl shadow-2xl border border-gray-300">
                <span className="text-green-950 font-medium text-3xl">
                    {interActionsThisMonth}
                </span>
                <p>Inter Actions This Month</p>
            </div>
        </div>
    );
};

export default StatesShow;