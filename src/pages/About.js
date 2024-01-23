import React from 'react';
import Navigation from '../components/Navigation';
import Aboutlogo from '../components/Aboutlogo';
import Aboutmenu from '../components/Aboutmenu';
import Footer from '../components/Footer';






const About = () => {
    return (
        <div className="abouthome">
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