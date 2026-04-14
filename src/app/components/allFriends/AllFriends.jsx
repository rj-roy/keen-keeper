import StatesShow from '@/app/ui/statesShow/StatesShow';
import React, { Suspense } from 'react';
import Friends from '../friends/Friends';
import { getFriends } from '@/app/lib/getFriends';
import Loading from '../../ui/statesShow/Loading';

const AllFriends = () => {

    return (
        <div>
            <StatesShow />
            <Suspense fallback={<Loading />} >
                <Friends />
            </Suspense>
        </div>
    );
};

export default AllFriends;