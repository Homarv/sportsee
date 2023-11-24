/**
 * Composant de bouton de la barre latérale affichant une icône et une description.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.imageUrl - L'URL de l'image de l'icône.
 * @param {string} props.description - La description de l'icône.
 * @param {string} props.addClass - La classe additionnelle à ajouter au composant (optionnelle).
 * @returns {JSX.Element} Élément JSX représentant le bouton de la barre latérale.
 */

const Sidebarbtn = ({ imageUrl, description, addClass }) => {
	// Ajoute la classe additionnelle (addClass) avec les classes existantes
	const classNames = `sidebarbtn${addClass ? ` sidebarbtn__${addClass}` : ""}`;

	return (
		<div className={classNames}>
			<img src={imageUrl} alt={description} className="centered-image" />
		</div>
	);
};

export default Sidebarbtn;
