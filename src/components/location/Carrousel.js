import React from 'react';

import left from "../../assets/img/carrousel/flech-left.png";
import right from "../../assets/img/carrousel/flech-right.png";

import logements from "../../../src/datas/logement.json";

/*
let start = 0; 
let move = slides.length;
let arrow_right = document.querySelector('.arrow_right');
let arrow_left = document.querySelector('.arrow_left');

function creationCaroussel(start){
	let element = slides[start];
	let img = document.querySelector(".banner-img");
		img.setAttribute("src" , "./assets/images/slideshow/"+ element.image);
	let p = document.querySelector(".banner-txt");
		p.innerHTML= element.tagLine;
}

arrow_right.addEventListener("click", () => {
	if (start === move - 1) {
		start = 0;
	} else {
		start++;
	}
	creationCaroussel(start);
});

arrow_left.addEventListener("click", () => {
	if (start === 0) {
		start = move - 1;
	}
	else {
		start--;
	}
	creationCaroussel(start);
}); 

*/






const Carrousel = () => {
    return (
        <section>
        <div className="banner">
            {logements.map((logement) => {
                    return (
            <img className="banner-img"  alt="image location" src={logement.pictures}></img>
/*
            <img className="arrow arrow_left" alt="left" src={left}></img>
            <img className="arrow arrow_right" alt="right" src={right}></img>
*/
            );
        })}
	    </div>
    </section>
    );
};

export default Carrousel;