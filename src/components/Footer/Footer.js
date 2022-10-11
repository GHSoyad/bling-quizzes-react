import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-items'>
                <h2>Follow Us</h2>
                <ul class="footer-icons">
                    <li><a href="https://www.facebook.com/golam.sowad/" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faFacebookF} className="footer-icon"></FontAwesomeIcon></a></li>
                    <li><a href="https://www.instagram.com/gh_sowad/" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faInstagram} className="footer-icon"></FontAwesomeIcon></a>
                    </li>
                    <li><a href="https://www.linkedin.com/in/ghsoyad/" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faLinkedinIn} className="footer-icon"></FontAwesomeIcon></a></li>
                    <li><a href="https://github.com/GHSoyad" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faGithub} className="footer-icon"></FontAwesomeIcon></a></li>
                </ul>
                <p class="copyright">Golam Hasnain Soyad | All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;