import React from "react";
import Sidebarbtn from "./Sidebarbtn";
import yoga from "../assets/yoga.svg";
import swimming from "../assets/swimming.svg";
import cycling from "../assets/cycling.svg";
import dumbbell from "../assets/dumbbell.svg";

/**
 * Composant de la barre latérale affichant des boutons d'icônes pour les activités sportives.
 *
 * @component
 * @returns {JSX.Element} Élément JSX représentant la barre latérale.
 */

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar_container_btn">
				<Sidebarbtn imageUrl={yoga} description="yogiste" />
				<Sidebarbtn imageUrl={swimming} description="nageur" />
				<Sidebarbtn imageUrl={cycling} description="cycliste" />
				<Sidebarbtn imageUrl={dumbbell} description="haltérophile" />
			</div>
			<div className="copiryght">Copyright, SportSee 2020</div>
		</div>
	);
};

export default Sidebar;
