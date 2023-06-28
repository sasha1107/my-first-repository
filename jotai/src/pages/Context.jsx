import React, { useEffect, useRef } from 'react';

const Context = () => {
    const wrapperRef = useRef(null);
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
        </section>
    );
};

export default Context;
