import { useState } from "react";

import left from "../../assets/img/carrousel/flech-left.png";
import right from "../../assets/img/carrousel/flech-right.png";


function Carrousel({ pictures }) {

	const [index, setIndex] = useState()
	const totalPictures = pictures.length - 1

	const nextSlide = () => {
        setIndex(index + 1)
        if(index === pictures.length - 1)
            setIndex(0)
    }

    const prevSlide = () => {
        setIndex(index - 1)
        if(index === 0)
            setIndex(pictures.length - 1)
    }

	if (index < 0) setIndex(totalPictures)
	if (index > totalPictures) setIndex(0)

	return (
		<div className='carrousel'>

			<div className='div-image'>
				<img src={pictures[index]} className="classImage" key={"car-" + index} alt={"photo " + index} />
			</div>

			{totalPictures > 0 && (
				<div>
					<button onClick={(nextSlide) => setIndex(index - 1)}>{index}
						<img src={left} className='classleft' alt={'flèche gauche' + index} />
					</button>
					<button onClick={(prevSlide) => setIndex(index + 1)}>{index}
						<img src={right} className='classright' alt={'flèche droite' + index} />
					</button>
				</div>
			)}
			{totalPictures > 0 && (

				<div className='div-compteur'>
					<p className='compteurImages'>
						{index + 1}/{totalPictures + 1}
					</p>
				</div>
			)}
		</div>
	)
}

export default Carrousel;