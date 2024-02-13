import greystar from "../../assets/img/star/grey_star.png";
import redstar from "../../assets/img/star/red_star.png";

export default function Rate({ logement }) {
	const stars = [1, 2, 3, 4, 5];
	const score = parseInt(logement.rating)

	return (
		<div className="rate-comp">
			{stars.map((level) =>
				score >= level ? (
					<img
						key={level.toString()}
						className="star"
						src={redstar}
						alt="rating star"
					/>
				) : ( //affichage conditionnel des étoiles de score, pleine ou vide selon le score passé en props
					<img
						key={level.toString()}
						className="star"
						src={greystar}
						alt="rating star"
					/>
				)
			)}
		</div>
	);
}