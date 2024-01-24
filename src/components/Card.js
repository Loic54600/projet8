import React from 'react';
import Host from "../assets/img/Host.png";


const Card = () => {
    return (
        <section className="detail">
            <div className="title">
                <h2 className="h2_title">Cozy</h2>
                <p className="p_title">Paris</p>
            </div>
            <div className="profil">
            <h3 className="h3_title">Paris</h3>
            <img  className="Host" alt="photo" src={Host}/>
            </div>
        </section>
    );
};

export default Card;