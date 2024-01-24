import React from 'react';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Gallery from '../components/Gallery';


const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <main>
                <Logo />
                <Gallery />
            </main>
            <Footer />
        </div>
    );
};

export default Home;