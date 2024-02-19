import React from 'react';

import Navigation from '../components/global/Navigation';
import Footer from '../components/global/Footer';
import Profil from '../components/location/Profil';
import Tag from '../components/location/Tag';
import Card from '../components/location/Card';

import logements from "../../src/datas/logement.json";
import Carrousel from '../components/location/Carrousel';
import Rate from '../components/location/Rate';



function getLogement() {
    const logementID = window.location.pathname.replace('/logement/', '');
    const logement = logements.find((logement) => { return logement.id === logementID })
    return logement !== null ? logement : [];
}

const Location = () => {
    return (
        <div className="location">
            <Navigation />
            <main>
                <Carrousel logement={getLogement()} />
                <section>
                    <Profil logement={getLogement()} />
                    <Tag logement={getLogement()} />
                    <Rate logement={getLogement()} />
                    <Card logement={getLogement()}/> 
                </section>
            </main>
            <Footer />
        </div>
    );
};


export default Location;