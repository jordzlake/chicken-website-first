import "./footer.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container container">
      <div className="footer-first-container">
        <div className="footer-brands-container">
          <FontAwesomeIcon className="footer-brand-icon" icon={faFacebook} />
          <FontAwesomeIcon className="footer-brand-icon" icon={faInstagram} />
          <FontAwesomeIcon className="footer-brand-icon" icon={faTiktok} />
        </div>
        <div className="footer-text">Copyright &copy;Chase Supply 2024</div>
      </div>
      <ul className="footer-second-container">
        <li className="footer-link">
          <Link className="footer-link-text link" href="#">
            Home
          </Link>
        </li>
        <li className="footer-link">
          <Link className="footer-link-text link" href="#">
            Schedule
          </Link>
        </li>
        <li className="footer-link">
          <Link className="footer-link-text link" href="#">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
