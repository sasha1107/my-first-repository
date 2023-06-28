import React from 'react';
import ParentContext from './pages/ParentContext';
import ParentJotai from './pages/ParentJotai';
import { ColorProvider } from './context/ColorContext';

function App() {
    return (
        <>
            <ColorProvider>
                <ParentContext />
            </ColorProvider>
            <ParentJotai />
        </>
    );
}

export default App;
