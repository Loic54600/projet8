import React from 'react';

import Navigation from '../components/global/Navigation';
import Logo from '../components/home/Logo';
import Gallery from '../components/home/Gallery';
import Footer from '../components/global/Footer';


const Home = () => {
    return (
        <section className="main_home">
            <Navigation />
                <Logo />
                <Gallery />
            <Footer />
        </section>
    );
};

export default Home;