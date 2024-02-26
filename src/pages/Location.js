import React from 'react';

import Navigation from '../components/global/Navigation';
import Footer from '../components/global/Footer';
import Profil from '../components/location/Profil';
import Tag from '../components/location/Tag';
import Card from '../components/location/Card';
import Carrousel from '../components/location/Carrousel';
import Rate from '../components/location/Rate';
import Error from "../pages/Error"

import logements from "../../src/datas/logement.json";
import Localisation from '../components/location/Localisation';




function getLogement() {
    const logementID = window.location.pathname.replace('/logement/', '');
    const logement = logements.find((logement) => { return logement.id === logementID })
    return logement !== null ? logement : [];
}

const Location = () => {
    if(getLogement() === undefined) {
        return <Error />
    }
    return (
        <div className="location">
            <Navigation />
            <main className="logement_view">
                <Carrousel logement={getLogement()} />
                <section className="detail_element">
                    <div className="profil_logement">
                        <Localisation logement={getLogement()} />
                        <Tag logement={getLogement()} />
                    </div>
                    <div className="profil_tag">
                        <Profil logement={getLogement()} />
                        <Rate logement={getLogement()} />
                    </div>
                </section>
                <section className="collapse_logement">
                    <Card logement={getLogement()} />
                </section>
            </main>
            <Footer />
        </div>
    );
};


export default Location;