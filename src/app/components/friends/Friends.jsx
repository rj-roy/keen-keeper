import { getFriends } from "@/app/lib/getFriends";
import FriendCard from "@/app/ui/friendsCard/FriendCard";

const Friends = async () => {
    const friends = await getFriends();
    return (
        <div>
            <h3 className="text-3xl font-medium">Your Friends</h3>
            {
                friends.map((friend, index) => <FriendCard key={index} friend={friend}/> )
            }
        </div>
    );
};

export default Friends;