import { getFriends } from "@/app/lib/getFriends";

const Total = async () => {
    const friends = await getFriends();
    return (
        <div>
            <span className="text-green-950 font-medium text-3xl">
                {friends.length}
            </span>
        </div>
    );
};

export default Total;