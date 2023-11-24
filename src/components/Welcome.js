/**
 * Welcome component displaying a personalized message for the user.
 *
 * @component
 * @param {Object} informationData - User information data.
 * @returns {JSX.Element} JSX element representing the welcome message.
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
