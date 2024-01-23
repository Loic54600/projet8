import React from 'react';
import left from "../assets/img/carrousel/flech-left.png";
import right from "../assets/img/carrousel/flech-right.png";

import first from "../assets/img/mobile-about-background.png";

const Carrousel = () => {
    return (
        <div className="banner">

            <img className="banner-img"  alt="Banner Print-it" src={first}></img>
            <img className="arrow arrow_left" alt="left" src={left}></img>
            <img className="arrow arrow_right" alt="right" src={right}></img>

		<div className="dots"></div>
	</div>
    );
};

export default Carrousel;