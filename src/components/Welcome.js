/**
 * Composant de bienvenue affichant un message personnalisé pour l'utilisateur.
 *
 * @component
 * @param {Object} informationData - Les données d'information de l'utilisateur.
 * @returns {JSX.Element} Élément JSX représentant le message de bienvenue.
 */

const Welcome = ({ informationData }) => {
	return (
		<div className="welcome">
			<p className="welcome__message">
				Bonjour{" "}
				<span style={{ color: "red" }}>
					{informationData.userInfos.firstName}
				</span>
			</p>
			<p>Félicitation ! Vous avez explosé vos objectifs hier 👏 </p>
		</div>
	);
};

export default Welcome;
