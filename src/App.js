import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            /*Ajoute la route page d'accueil */
            <Route path= "/" element={<Home />} />
            /*Ajoute la route About */
            <Route path= "/about" element={<About />} />

            /* path="*" si jamais l'url ne correspond pas (Re tour a la page d'accueil Home)*/
            <Route path='*' element={<Home />} />
        </Routes>
        </BrowserRouter>
    );
};

export default App;