import { Link } from 'react-router-dom';
import logo1 from './logo1.svg';

function Nav() {
  return (
    <nav>
      <ul className='nav-container'>
        <li className='logo'>
          <Link to="/" className='logo-link'>
            <img src={logo1} alt="logo" width="60" height="60"/> StudiCode
          </Link>
        </li>
        <li className='nav-menu'>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/careers">Careers</Link>
        </li>
        <li className='nav-button'>
          <Link to="/contact" className='pill-button'>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
