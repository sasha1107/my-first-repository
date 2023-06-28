import React, { useEffect, useRef } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';
import Context from './Context';
import Context2 from './Context2';

const ParentContext = () => {
    const wrapperRef = useRef(null);
    useEffect(() => {
        console.log('Parent-Context: render');
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
                    <Context />
                    <Context2 /> 
                </Child2>
            </Child1>
        </section>
    );
};

export default ParentContext;
