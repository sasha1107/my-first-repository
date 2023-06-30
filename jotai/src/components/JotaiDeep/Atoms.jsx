import React from 'react';
import DerivedAtom from './DerivedAtom';
import OriginAtom from './OriginAtom';

const Atoms = () => {
    return (
        <div className='grid grid-col-2'>
            <OriginAtom />
            <DerivedAtom />
        </div>
    );
};

export default Atoms;
