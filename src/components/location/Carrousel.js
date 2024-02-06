import React from 'react';

import left from "../../assets/img/carrousel/flech-left.png";
import right from "../../assets/img/carrousel/flech-right.png";

/*
let start = 0;
let move = slides.length;

let arrow_right = document.querySelector('.arrow_right');
let arrow_left = document.querySelector('.arrow_left');

function creationCaroussel(start) {

	let element = slides[start];
	let img = document.querySelector(".banner-img");
	img.setAttribute("src", "../../src/datas/logement.json" + "element.image");
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






const Carrousel = ({ logement }) => {
	return (
		<section className="carrousel_banner">
			<div className="banner">
				<img className="banner-img" alt="image location" src={logement.host.picture} />
				<img className="arrow arrow_left" alt="fleche gauche" src={left} />
				<img className="arrow arrow_right" alt="fleche droite" src={right} />
			</div>
		</section>
	);
};

export default Carrousel;