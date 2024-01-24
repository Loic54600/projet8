import React from 'react';

import Navigation from '../components/Navigation';
import Carrousel from '../components/Carrousel';
import Card from '../components/Card';
import Detail from '../components/Detail';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';


const Location = () => {
    return (
        <div className="home">
            <Navigation />
                <main>
                    <Carrousel />
                    <Card />
                    <Detail />
                    <Collapse />
                </main>
            <Footer />
        </div>
    );
};

export default Location;