import './Navbar.css';
import logo from '../images/DaliiN.png';
import oliver from '../images/oliver-dahlin-logo.png';

import { Link, animateScroll as scroll } from 'react-scroll';

const Home = () => {
    scroll.scrollToTop();
};

function Navbar() {
    return (
        <header>
            <nav>
                <div className="logo" onClick={Home}>
                    <img src={logo} alt="logo" />
                    <img src={oliver} alt="Oliver Dahlin" />
                </div>

                <ul>
                    <li><Link activeClass="active" to="home" spy="true" smooth={true} offset={-97.5} duration={500}>Home</Link></li>
                    <li><Link activeClass="active" to="about" spy="true" smooth={true} offset={0} duration={500}>About</Link></li>
                    <li><Link activeClass="active" to="projects" spy="true" smooth={true} offset={0} duration={500}>Projects</Link></li>
                    <li><Link activeClass="active" to="contact" spy="true" smooth={true} offset={0} duration={500}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;