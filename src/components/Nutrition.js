import Sidebarbtn from "./Sidebarbtn";
import flame from '../assets/flame.svg'
import burger from '../assets/burger.svg'
import apple from '../assets/apple.svg'
import chicken from '../assets/chicken.svg'

/**
 * Composant affichant les informations nutritionnelles.
 *
 * @component
 * @param {Object} informationData - Les données d'information nutritionnelle.
 * @param {Object} informationData.keyData - Les données clés de l'information nutritionnelle.
 * @param {number} informationData.keyData.calorieCount - Le compte calorique en Kcal.
 * @param {number} informationData.keyData.proteinCount - Le compte de protéines en grammes.
 * @param {number} informationData.keyData.carbohydrateCount - Le compte de glucides en grammes.
 * @param {number} informationData.keyData.lipidCount - Le compte de lipides en grammes.
 * @returns {JSX.Element} Élément JSX représentant les informations nutritionnelles.
 */

const Nutrition = ({informationData}) => {
  return (
    <div className='nutrition'>
      <div className="nutrition__container">
        <Sidebarbtn imageUrl={flame} description="flamme" addClass="fire"/>
        <div>
          <p className="bold">{informationData.keyData.calorieCount}Kcal</p>
          <p>Calories</p>
        </div>
      </div>
      <div className="nutrition__container">
        <Sidebarbtn imageUrl={chicken} description="poulet" addClass="chicken"/>
        <div>
          <p className="bold">{informationData.keyData.proteinCount}g</p>
          <p>Protéine</p>
        </div>
      </div>
      <div className="nutrition__container">
        <Sidebarbtn imageUrl={apple} description="pomme" addClass="apple"/>
        <div>
          <p className="bold">{informationData.keyData.carbohydrateCount}g</p>
          <p>Glucides</p>
        </div>
      </div>
      <div className="nutrition__container">
        <Sidebarbtn imageUrl={burger} description="burger" addClass="burger"/>
        <div>
          <p className="bold">{informationData.keyData.lipidCount}g</p>
          <p>Lipides</p>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
