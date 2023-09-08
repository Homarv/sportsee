import Sidebarbtn from "./Sidebarbtn";
import { MOCK_USER_18 } from "../mock/mock";

console.log(MOCK_USER_18.keyData.calorieCount)

const Nutrition = () => {
  return (
    <div className='nutrition'>
      <div className="nutrition__container">
        <Sidebarbtn imageUrl="flame.svg" description="flamme"/>
        <div>
          <p>{MOCK_USER_18.keyData.calorieCount}Kcal</p>
          <p>Calories</p>
        </div>
      </div>
      <div className="nutrition__container">
        <Sidebarbtn imageUrl="chicken.svg" description="poulet"/>
        <div>
          <p>{MOCK_USER_18.keyData.proteinCount}g</p>
          <p>Protéine</p>
        </div>
      </div>
      <div className="nutrition__container">
        <Sidebarbtn imageUrl="apple.svg" description="pomme"/>
        <div>
          <p>{MOCK_USER_18.keyData.carbohydrateCount}g</p>
          <p>Glucides</p>
        </div>
      </div>
      <div className="nutrition__container">
        <Sidebarbtn imageUrl="burger.svg" description="burger"/>
        <div>
          <p>{MOCK_USER_18.keyData.lipidCount}g</p>
          <p>Lipides</p>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;