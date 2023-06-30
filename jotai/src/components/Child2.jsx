import React, { useEffect, useRef } from 'react';

const Child2 = ({ children }) => {
    const wrapperRef = useRef(null);
    useEffect(() => {
        wrapperRef.current.animate(
            [{ backgroundColor: '#f7d8ff' }, { backgroundColor: 'white' }],
            { duration: 1000 }
        );
    });
    return (
        <section ref={wrapperRef}>
            <h3>Child2</h3>
            {children}
        </section>
    );
};

export default Child2;
