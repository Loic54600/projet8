import React from 'react';
import Navigation from '../components/Navigation';
import Carrousel from '../components/Carrousel';
import Footer from '../components/Footer';


const Location = () => {
    return (
        <div className="home">
            <Navigation />
            <main>
            <Carrousel />
            </main>
            <Footer />
        </div>
    );
};

export default Location;