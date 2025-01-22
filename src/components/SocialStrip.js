import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function SocialStrip() {
  return (
    <div className="social-strip">
      <div className="social-icons">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
      <Link to="/follow" className="pill-button">Follow</Link>
      <div className="topics">
        <span>#WebDev</span>
        <span>#DSA</span>
        <span>#Interview</span>
      </div>
    </div>
  );
}

export default SocialStrip; 