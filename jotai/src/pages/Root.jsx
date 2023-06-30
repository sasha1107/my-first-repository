import React from 'react';
import ParentContext from '../components/ParentContext';
import ParentJotai from '../components/ParentJotai';
import { CounterContextProvider } from '../context/CounterContext';

const Root = () => {
    return (
        <div className='grid grid-cols-2'>
            <CounterContextProvider>
                <ParentContext />
            </CounterContextProvider>
            <ParentJotai />
        </div>
    );
};

export default Root;
