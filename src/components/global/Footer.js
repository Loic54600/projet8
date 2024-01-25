import React from 'react';
import Kasafooter from "../../assets/img/kasa.footer.png";

const Footer = () => {
    return (
        <footer className="footer"> 
            <img  className="kasafooter" alt="falaise" src={Kasafooter}/>
            <h3>© 2020 Kasa. All rights reserved</h3>
        </footer>
    );
};

export default Footer;