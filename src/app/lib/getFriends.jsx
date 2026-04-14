export const getFriends = async () =>{
    const res = await fetch('http://localhost:3000/api/friends.json');
    return res.json();
};