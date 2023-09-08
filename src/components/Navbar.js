import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/" className="link">
            <div className='navbar_container_logo'>
             <img className='navbar_logo' src='logo_sportsee.png' alt='logo'/>
             <h1>Sportsee</h1>
            </div>
          </Link>
        </li>
        <li><Link to="/" className="link">Accueil</Link></li>
        <li><Link to="/" className="link">Profil</Link></li>
        <li><Link to="/" className="link">Réglage</Link></li>
        <li><Link to="/" className="link">Communauté</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;