import React from 'react';

import Navigation from '../components/global/Navigation';
import Carrousel from '../components/location/Carrousel';
import Card from '../components/location/Card';
import Detail from '../components/location/Detail';
import Team from '../components/location/Team';
import Footer from '../components/global/Footer';


const Location = () => {
    return (
        <div className="home">
            <Navigation />
                <main>
                    <Carrousel />
                    <Card />
                    <Detail />
                    <Team />
                </main>
            <Footer />
        </div>
    );
};

export default Location;