import './Home.css';

import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

function Home() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Hello.</h1>
                <h2>I'm Oliver Dahlin</h2>
                <h4>A junior developer with passion for UI/UX design</h4>
                <Link to="projects" spy="true" smooth={true} offset={0} duration={1000}>My work<i className="fas fa-arrow-right"></i></Link>
            </div>

            <div className="socials">
                <a href="https://www.facebook.com/oliver.dalin/" target="_blank"><FaFacebook /></a>
                <a href="https://www.instagram.com/oliiver.dahliin/" target="_blank"><FaInstagram /></a>
                <a href="https://www.linkedin.com/in/oliver-dahlin-8056571b5/" target="_blank"><FaLinkedin /></a>
                <a href="https://github.com/DahlinOliver" target="_blank"><FaGithub /></a>
                <div id="vertical-line"></div>
            </div>
        </section >
    )
}

export default Home;