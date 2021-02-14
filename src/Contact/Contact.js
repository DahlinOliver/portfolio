import './Contact.css';
import logo from '../images/DaliiN.png';

import { Link } from 'react-scroll';

import { SiMinutemailer } from 'react-icons/si';
import { RiMailSendLine } from 'react-icons/ri';

function Contact() {
    return (
        <div id="contact">
            <div className="row">
                <div className="left">
                    <SiMinutemailer />
                    <span>Get In Touch</span>
                    <h2>Have A Project?</h2>
                    <a href="mailto:oliver.niclas.dahlin@gmail.com">Get In Touch</a>
                </div>
                <div className="right">
                    <RiMailSendLine />
                    <span>Contact Me</span>
                    <h2>Do You Have A Question?</h2>
                    <a href="mailto:oliver.niclas.dahlin@gmail.com">Contact Me</a>
                </div>
            </div>
            <div className="footer">
                <div className="footer-content">
                    <img src={logo} alt="logo" />

                    <div className="links-c">
                        <span>Links</span>

                        <li><Link to="home" smooth={true} offset={-97.5} duration={500}>Home</Link></li>
                        <li><Link to="about" smooth={true} offset={0} duration={500}>About</Link></li>
                        <li><Link to="projects" smooth={true} offset={0} duration={500}>Projects</Link></li>
                        <li><Link to="contact" smooth={true} offset={0} duration={500}>Contact</Link></li>

                    </div>

                    <div className="socials-c">
                        <span>Socials</span>

                        <li><a href="https://www.facebook.com/oliver.dalin/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://www.instagram.com/oliiver.dahliin/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://www.linkedin.com/in/oliver-dahlin-8056571b5/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://github.com/DahlinOliver" target="_blank" rel="noopener noreferrer">Github</a></li>
                    </div>
                </div>
                <div className="copyright">
                    <hr />
                    <p>Oliver Dahlin © 2021. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;