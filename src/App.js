import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Location from './pages/Location';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/*Ajoute la route page d'accueil */}
                <Route path="/" element={<Home />} />
                {/*Ajoute la route About */}
                <Route path="/about" element={<About />} />
                
                <Route path="/logement/:id" element={<Location />} />

                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;