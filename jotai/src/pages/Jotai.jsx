import React, { useEffect, useRef } from 'react';
import Sub from './Sub';
import { useAtom } from 'jotai';
import { countAtom } from '../atom/count';

const Jotai = () => {
    const wrapperRef = useRef(null);
    const [count, setCount] = useAtom(countAtom);

    useEffect(() => {
        console.log('Jotai: render');
        wrapperRef.current.animate(
            [{ backgroundColor: '#e785ff' }, { backgroundColor: 'white' }],
            { duration: 1000 }
        );
    });
    return (
        <section ref={wrapperRef}>
            <h1>Jotai 👻</h1>
            <div className='flex justify-evenly'>
                <button onClick={() => setCount(c => c - 1)}>-</button>
                <p>Count: {count}</p>
                <button onClick={() => setCount(c => c + 1)}>+</button>
            </div>
            <Sub />
        </section>
    );
};

export default Jotai;
