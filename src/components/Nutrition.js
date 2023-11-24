import SidebarBtn from "./SidebarBtn";
import flame from "../assets/flame.svg";
import burger from "../assets/burger.svg";
import apple from "../assets/apple.svg";
import chicken from "../assets/chicken.svg";

/**
 * Component displaying nutritional information.
 *
 * @component
 * @param {Object} informationData - Nutritional information data.
 * @param {Object} informationData.keyData - Key nutritional information data.
 * @param {number} informationData.keyData.calorieCount - Caloric count in Kcal.
 * @param {number} informationData.keyData.proteinCount - Protein count in grams.
 * @param {number} informationData.keyData.carbohydrateCount - Carbohydrate count in grams.
 * @param {number} informationData.keyData.lipidCount - Lipid count in grams.
 * @returns {JSX.Element} JSX element representing nutritional information.
 */

const Nutrition = ({ informationData }) => {
	return (
		<div className="nutrition">
			<div className="nutrition__container">
				<SidebarBtn imageUrl={flame} description="flame" addClass="fire" />
				<div>
					<p className="bold">{informationData.keyData.calorieCount}Kcal</p>
					<p className="nutrition__description">Calories</p>
				</div>
			</div>
			<div className="nutrition__container">
				<SidebarBtn imageUrl={chicken} description="chicken" addClass="chicken" />
				<div>
					<p className="bold">{informationData.keyData.proteinCount}g</p>
					<p className="nutrition__description">Protéine</p>
				</div>
			</div>
			<div className="nutrition__container">
				<SidebarBtn imageUrl={apple} description="apple" addClass="apple" />
				<div>
					<p className="bold">{informationData.keyData.carbohydrateCount}g</p>
					<p className="nutrition__description">Glucides</p>
				</div>
			</div>
			<div className="nutrition__container">
				<SidebarBtn imageUrl={burger} description="burger" addClass="burger" />
				<div>
					<p className="bold">{informationData.keyData.lipidCount}g</p>
					<p className="nutrition__description">Lipides</p>
				</div>
			</div>
		</div>
	);
};

export default Nutrition;
