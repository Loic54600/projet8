import React from 'react';

import Navigation from '../components/global/Navigation';
import Aboutlogo from '../components/about/Aboutlogo';
import Aboutmenu from '../components/about/Aboutmenu';
import Footer from '../components/global/Footer';

const About = () => {
    return (
        <div>
            <Navigation />
            <main>
                <Aboutlogo />
                <Aboutmenu />
            </main>
            <Footer />
        </div>
    );
};

export default About;