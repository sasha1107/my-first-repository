import React from 'react';
import Root from './pages/Root';
import JotaiDeep from './pages/JotaiDeep';

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Root />} />
                <Route path="/jotai" element={<JotaiDeep />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
