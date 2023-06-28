import React from 'react';
import ParentContext from './pages/ParentContext';
import ParentJotai from './pages/ParentJotai';
import { CounterContextProvider } from './context/CounterContext';

function App() {
    return (
        <>
            <CounterContextProvider>
                <ParentContext />
            </CounterContextProvider>
            <ParentJotai />
        </>
    );
}

export default App;
