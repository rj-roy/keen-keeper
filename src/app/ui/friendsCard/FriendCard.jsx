import React from 'react';

const FriendCard = ({friend}) => {    
    const {
        id, goal, email,
        picture,
    } = friend;

    return (
        <div>            
            <img src={picture} alt="pic" />
        </div>
    );
};

export default FriendCard;