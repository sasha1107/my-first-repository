import React from 'react';
import UseAnime from '../components/JotaiDeep/UseAnime';
import AddAnime from '../components/JotaiDeep/AddAnime';
import Hr from '../components/Hr';
import Atoms from '../components/JotaiDeep/Atoms';

const JotaiDeep = () => {
    return (
        <div className='flex flex-col gap-6'>
            <UseAnime />
            <AddAnime />
            <Hr />
            <Atoms />
        </div>
    );
};

export default JotaiDeep;
