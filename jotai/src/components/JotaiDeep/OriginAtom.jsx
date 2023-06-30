import React, { useRef, useEffect } from 'react';
import { original } from '../../atom/derive';
import { useAtom } from 'jotai';

const OriginAtom = () => {
    const [originalAtom, setOriginalAtom] = useAtom(original);
    const originRef = useRef(null);
    
    useEffect(() => {
        originRef.current.animate(
            [{ backgroundColor: '#f0ffbb' }, { backgroundColor: 'white' }],
            { duration: 1000 }
        );
    });

    return (
        <section ref={originRef}>
            <h2>Original Atom</h2>
            <p className='text-red-500 text-4xl flex-center'>{originalAtom}</p>
            <button onClick={() => setOriginalAtom(originalAtom + 1)}>+</button>
        </section>
    );
};

export default OriginAtom;
