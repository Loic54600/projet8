import React from 'react';
import ReactDOM from 'react-dom/client';

import "./styles/index.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Location from './pages/Location';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/*Ajoute la route page d'accueil */}
        <Route path="/" element={<Home />} />
        {/*Ajoute la route About */}
        <Route path="/about" element={<About />} />
        {/*Ajoute la route pour aller sur la page location par rapport a l'id */}
        <Route path="/logement/:id" element={<Location />} />
        {/*Ajoute la route error si une page n'a pas id */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
