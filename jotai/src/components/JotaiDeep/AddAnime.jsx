import React, { useRef, useEffect } from 'react';
import { animeAtom } from '../../atom/anime';
import { useSetAtom } from 'jotai';

const AddAnime = () => {
    const setAnime = useSetAtom(animeAtom);
    const wrapperRef = useRef(null);
    useEffect(() => {
        wrapperRef.current.animate(
            [{ backgroundColor: '#85ffae' }, { backgroundColor: 'transparent' }],
            { duration: 1000 }
        );
    });
    return (
        <div ref={wrapperRef} className='grid grid-cols-3 gap-4 p-4'>
            <button
                className='hover:bg-indigo-700 px-24 col-start-2'
                onClick={() => {
                    setAnime((anime) => [
                        ...anime,
                        {
                            title: 'Cowboy Bebop',
                            year: 1998,
                            watched: Math.random() > 0.5 ? true : false,
                        },
                    ]);
                }}
            >
                Add
            </button>
        </div>
    );
};
export default AddAnime;

