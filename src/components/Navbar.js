import { Link } from "react-router-dom";
import logo from "../assets/logo_sportsee.png";

/**
 * Navigation bar component.
 *
 * @component
 * @returns {JSX.Element} JSX element representing the navigation bar.
 */

const Navbar = () => {
	return (
		<div className="navbar">
			<ul>
				<li>
					<Link to="/" className="link">
						<div className="navbar_container_logo">
							<img className="navbar_logo" src={logo} alt="logo" />
							<h1>Sportsee</h1>
						</div>
					</Link>
				</li>
				<li>
					<Link to="/" className="link">
						Accueil
					</Link>
				</li>
				<li>
					<Link to="/" className="link">
						Profil
					</Link>
				</li>
				<li>
					<Link to="/" className="link">
						Réglage
					</Link>
				</li>
				<li>
					<Link to="/" className="link">
						Communauté
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
