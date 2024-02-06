import React from 'react';

import Navigation from '../components/global/Navigation';
import Logo from '../components/home/Logo';
import Gallery from '../components/home/Gallery';
import Footer from '../components/global/Footer';


const Home = () => {
    return (
        <div>
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