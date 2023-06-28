import React, { useEffect, useRef } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';
import Jotai from './Jotai';
import Jotai2 from './Jotai2';

const ParentJotai = () => {
    const wrapperRef = useRef(null);
    useEffect(() => {
        console.log('Parent-Jotai: render');
        wrapperRef.current.animate(
            [{ backgroundColor: '#f0ffbb' }, { backgroundColor: 'white' }],
            { duration: 1000 }
        );
    });
    return (
        <section ref={wrapperRef}>
            <h1>Parent</h1>
            <Child1>
                <Child2>
                    <Jotai />
                    <Jotai2 />
                </Child2>
            </Child1>
        </section>
    );
};

export default ParentJotai;
