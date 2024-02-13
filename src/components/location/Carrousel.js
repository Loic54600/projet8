import { useState } from "react";

import left from "../../assets/img/carrousel/flech-left.png";
import right from "../../assets/img/carrousel/flech-right.png";


function Carrousel({ logement }) {

	const [index, setIndex] = useState(0);
	const totalPictures = logement.length - 1;

	const nextSlide = () => {
		setIndex(index + 1)
		if (index === logement.length - 1)
			setIndex(0)
	}

	const prevSlide = () => {
		setIndex(index - 1)
		if (index === 0)
			setIndex(logement.length - 1)
	}

	if (index < 0) setIndex(totalPictures)
	if (index > totalPictures) setIndex(0)

	return (
		<div className='carrousel'>
			{logement.map((logement, index) => {
			<div className='div-image'>
				<img src={logement[index]} className="classImage" key={"car-" + index} alt={"photo " + index} />
			</div>
			      })}

			{totalPictures.length > 0 && (
				<div className="Buttonslide">
					<img src={left} onClick={prevSlide} className="arrow" alt="Preview icon" />
          			<img src={right} onClick={nextSlide} className="arrow" alt="Next icon" />	
				</div>
			)}
			{totalPictures > 0 && (

				<div className='div-compteur'>
					<p className='compteurImages'>
						{index + 1}/{totalPictures.length + 1}
					</p>
				</div>
			)}
		</div>
	)
}

export default Carrousel;