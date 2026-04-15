import StatesShow from '@/app/components/statesShow/StatesShow';
import React, { Suspense } from 'react';
import Loading from '../statesShow/Loading';
import Friends from '@/app/components/friends/page';

const AllFriends = () => {

    return (
        <div className='space-y-15'>
            <StatesShow />
            <Suspense fallback={<Loading />} >
                <Friends />
            </Suspense>
        </div>
    );
};

export default AllFriends;