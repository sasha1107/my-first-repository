import React, { useEffect, useRef } from 'react';

const Jotai = () => {
    const wrapperRef = useRef(null);
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
        </section>
    );
};

export default Jotai;
