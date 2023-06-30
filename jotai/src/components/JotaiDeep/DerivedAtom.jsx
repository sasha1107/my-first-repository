import React, { useRef, useEffect } from 'react';
import { useAtom } from 'jotai';
import { derived } from '../../atom/derive';

const DerivedAtom = () => {
    const [derivedAtom, setDerivedAtom] = useAtom(derived);
    const derivedRef = useRef(null);
    useEffect(() => {
        derivedRef.current.animate(
            [{ backgroundColor: '#f0ffbb' }, { backgroundColor: 'white' }],
            { duration: 1000 }
        );
    });
    return (
        <section ref={derivedRef}>
            <h2>Derived Atom</h2>
            <p className='text-red-500 text-4xl flex-center'>{derivedAtom}</p>
            <button onClick={() => setDerivedAtom(derivedAtom + 1)}>+</button>
        </section>
    );
};

export default DerivedAtom;
