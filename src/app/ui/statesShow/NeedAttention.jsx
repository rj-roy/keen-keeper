import { getFriends } from "@/app/lib/getFriends";

const NeedAttention = async () => {
    const friends = await getFriends();
    const needAttention = friends.filter(f => f.status === "overdue").length;

    return (
        <div>
            <span className="text-green-950 font-medium text-3xl">
                {needAttention}
            </span>
        </div>
    );
};

export default NeedAttention;