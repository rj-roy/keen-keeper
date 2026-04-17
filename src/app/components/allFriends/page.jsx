import StatesShow from '@/app/components/statesShow/StatesShow';
import React, { Suspense } from 'react';
import Friends from '@/app/components/friends/page';
import Loading from '@/app/loading';

const AllFriends = () => {

    return (
        <div className='space-y-15'>
            <StatesShow />

            <div className='space-y-5'>
                <h3 className="text-4xl font-medium text-green-950">Your Friends</h3>
                <Suspense fallback={<Loading />} >
                    <Friends />
                </Suspense>
            </div>
        </div>
    );
};

export default AllFriends;