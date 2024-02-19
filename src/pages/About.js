import React from 'react';

import Navigation from '../components/global/Navigation';
import Collapse from '../components/about/Collapse';
import Footer from '../components/global/Footer';


const About = () => {
    return (
        <section className="main_home">
            <Navigation />
                <Collapse />
            <Footer />
        </section>
    );
};

export default About;