import React, { useEffect, useRef } from 'react';
import { useContextDispatch, useContextCount } from '../context/CounterContext';
import Sub from './Sub';

const Context2 = () => {
    const wrapperRef = useRef(null);
    const dispatch = useContextDispatch();
    const { count2 } = useContextCount();
    useEffect(() => {
        wrapperRef.current.animate(
            [{ backgroundColor: '#85d8ff' }, { backgroundColor: 'white' }],
            { duration: 1000 }
        );
    });
    return (
        <section ref={wrapperRef}>
            <h1>Context ⚛️</h1>
            <div className='flex justify-evenly items-center'>
                <button onClick={() => dispatch({ type: 'sub2' })}>-</button>
                <p>Count: {count2}</p>
                <button onClick={() => dispatch({ type: 'add2' })}>+</button>
            </div>
            <Sub />
        </section>
    );
};

export default Context2;
