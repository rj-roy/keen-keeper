import { getFriends } from "@/app/lib/getFriends";
import FriendCard from "@/app/ui/friendsCard/FriendCard";

const Friends = async () => {
    const friends = await getFriends();
    return (
        <div className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {
                    friends.map((friend, index) => <FriendCard key={index} friend={friend} />)
                }
            </div>
        </div>
    );
};

export default Friends;