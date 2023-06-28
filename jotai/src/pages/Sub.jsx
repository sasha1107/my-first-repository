import React, { useEffect, useRef } from 'react';

const Sub = ({ children }) => {
    const wrapperRef = useRef(null);
    useEffect(() => {
        console.log('Child1: render');
        wrapperRef.current.animate(
            [{ backgroundColor: '#b9b9b9' }, { backgroundColor: 'white' }],
            { duration: 1000 }
        );
    });
    return (
        <section ref={wrapperRef}>
            <h3>Sub</h3>
        </section>
    );
};

export default Sub;
