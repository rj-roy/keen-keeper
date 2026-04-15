import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FriendCard = ({ friend }) => {
    const {
        picture,
        name,
        days_since_contact,
        tags,
        status,
        slug
    } = friend;

    return (
        <Link href={`/${slug}`} className='text-center mx-auto bg-gray-100 w-full space-y-1 flex flex-col justify-center items-center p-5 rounded-2xl shadow-xl border border-gray-200 cursor-pointer'>
            
            <div className='flex justify-center'>
                <Image className='rounded-full' src={picture} alt="avatar" width={100} height={100} />
            </div>
            <div>
                <h3 className='text-xl font-medium my-2'>{name}</h3>
                <p className='text-gray-600'>{days_since_contact} Days Ago</p>
            </div>
            <div className='flex flex-col justify-center items-center space-y-3'>
                <div className='flex gap-2 justify-center'>
                    {
                        tags.map((t, i) => <p className='p-1 bg-green-200 rounded-full px-3 font-bold text-green-900' key={i}> {t} </p>)
                    }
                </div>
                <div className={`text-white p-1 px-3 w-35 rounded-full flex justify-center ${status === "on-track" ? "bg-green-900" : status === "overdue" ? "bg-red-600" : "bg-yellow-600"}`}>{status}</div>
            </div>
        </Link>
    );
    
};

export default FriendCard;