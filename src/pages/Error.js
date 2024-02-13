import React from 'react';

import Navigation from '../components/global/Navigation';
import Error from '../components/error404/Error';
import Footer from '../components/global/Footer';




const Errorhome = () => {
    return (
        <section className="Errorhome">
            <Navigation />
                <Error />
            <Footer />
        </section>
    );
};

export default Errorhome;