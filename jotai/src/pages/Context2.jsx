import React, { useEffect, useRef } from 'react';
import { useContextDispatch, useContextCount } from '../context/CounterContext';
import Sub from './Sub';

const Context2 = () => {
    const wrapperRef = useRef(null);
    const dispatch = useContextDispatch();
    const { count2 } = useContextCount();
    useEffect(() => {
        console.log('Context: render');
        wrapperRef.current.animate(
            [{ backgroundColor: '#85d8ff' }, { backgroundColor: 'white' }],
            { duration: 1000 }
        );
    });
    return (
        <section ref={wrapperRef}>
            <h1>Context ⚛️</h1>
            <div className='flex justify-evenly'>
                <button onClick={() => dispatch({ type: 'sub2' })}>-</button>
                <p>Count: {count2}</p>
                <button onClick={() => dispatch({ type: 'add2' })}>+</button>
            </div>
            <span>카운트를 늘리면 하위 컴포넌트까지 리렌더링된다.</span>
            <Sub />
        </section>
    );
};

export default Context2;
