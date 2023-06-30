import React, { useEffect, useRef } from 'react';
import Sub from './Sub';
import { useAtom } from 'jotai';
import { countAtom2 } from '../atom/count';

const Jotai2 = () => {
    const wrapperRef = useRef(null);
    const [count2, setCount] = useAtom(countAtom2);

    useEffect(() => {
        wrapperRef.current.animate(
            [{ backgroundColor: '#e785ff' }, { backgroundColor: 'white' }],
            { duration: 1000 }
        );
    });
    return (
        <section ref={wrapperRef}>
            <h1>Jotai 👻</h1>
            <div className='flex justify-evenly items-center'>
                <button onClick={() => setCount(c => c - 1)}>-</button>
                <p>Count: {count2}</p>
                <button onClick={() => setCount(c => c + 1)}>+</button>
            </div>
            <Sub />
        </section>
    );
};

export default Jotai2;
