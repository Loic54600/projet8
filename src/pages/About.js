import React from 'react';

import Navigation from '../components/global/Navigation';
import Aboutlogo from '../components/about/Aboutlogo';
import Collapse from '../components/about/Collapse';
import Footer from '../components/global/Footer';

const About = () => {
    return (
        <div>
            <Navigation />
            <main className="main_home">
                <Aboutlogo />
                <Collapse />
            </main>
            <Footer />
        </div>
    );
};

export default About;