import { getFriends } from "@/app/lib/getFriends";

const InteractionsThisMonth = async () => {
    const today = new Date();
    const daysInCurrentMonth = today.getDate();
    
    const friends = await getFriends();
    const interActionsThisMonth = friends.filter(f => f.days_since_contact <= daysInCurrentMonth).length;

    return (
        <div>
            <span className="text-green-950 font-medium text-3xl">
                {interActionsThisMonth}
            </span>
        </div>
    );
};

export default InteractionsThisMonth;