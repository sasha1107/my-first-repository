import React, { useEffect, useRef } from 'react';
import { useAtomValue } from 'jotai';
import { animeAtom } from '../../atom/anime';

const UseAnime = () => {
    const list = useAtomValue(animeAtom);
    const wrapperRef = useRef(null);
    useEffect(() => {
        wrapperRef.current.animate(
            [{ backgroundColor: '#85d8ff' }, { backgroundColor: 'transparent' }],
            { duration: 1000 }
        );
    });
    return (
        <div ref={wrapperRef} className='grid grid-cols-3 gap-4 p-4'>
            {list.map((anime) => {
                return (
                    <div
                        className='bg-white border p-4 rounded-md border-gray-300 shadow-md'
                        key={crypto.randomUUID()}
                    >
                        <h2 className='mb-2'>{anime.title}</h2>
                        <p>{anime.year}</p>
                        {anime.watched ? (
                            <code className='bg-red-200 text-red-900 text-sm p-1 rounded'>Watched</code>
                        ) : (
                            <code className='bg-indigo-200 text-indigo-900 text-sm p-1 rounded'>
                                Unwatched
                            </code>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default UseAnime;
