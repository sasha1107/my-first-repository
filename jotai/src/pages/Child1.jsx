import React, { useEffect, useRef } from 'react';

const Child1 = ({ children }) => {
    const wrapperRef = useRef(null);
    useEffect(() => {
        console.log('Child1: render');
        wrapperRef.current.animate(
            [{ backgroundColor: '#BFDBFE' }, { backgroundColor: 'white' }],
            { duration: 1000 }
        );
    });
    return (
        <section ref={wrapperRef}>
            <h2>Child1</h2>
            {children}
        </section>
    );
};

export default Child1;
