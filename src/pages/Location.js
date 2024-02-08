import React from 'react';

import Navigation from '../components/global/Navigation';
import Card from '../components/location/Card';
import Footer from '../components/global/Footer';

import logements from "../../src/datas/logement.json";
import Carrousel from '../components/location/Carrousel';



function getLogement(){
    const logementID = window.location.pathname.replace('/logement/', '');
    const logement = logements.find((logement)=> { return logement.id === logementID })
    return logement !== null ? logement :  [];
}

const Location = () => {
    return (
        <div className="location">
            <Navigation />
                <main>
                    {/*<Carrousel logement={getLogement()}/> */}
                    <Card logement={getLogement()}/>
                </main>
            <Footer />
        </div>
    );
};


export default Location;