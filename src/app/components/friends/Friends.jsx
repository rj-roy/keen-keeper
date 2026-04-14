import { getFriends } from "@/app/lib/getFriends";

const Friends = async () => {
    const friends = await getFriends();
    console.log(friends);
    return (
        <div>
            friends-friends-card
        </div>
    );
};

export default Friends;