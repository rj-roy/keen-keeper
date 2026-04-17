import { getFriends } from "@/app/lib/getFriends";

const OnTrack = async () => {
    const friends = await getFriends();
    const onTrack = friends.filter(f => f.status === "on-track").length;

    return (
        <div>
            <span className="text-green-950 font-medium text-3xl">
                {onTrack}
            </span>
        </div>
    );
};

export default OnTrack;