import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import './Navbar.css';
import logo from '../images/DaliiN.png';
import oliver from '../images/oliver-dahlin-logo.png';

scroller.scrollTo('myScrollToElement', {
    duration: 3000,
    delay: 100,
    smooth: 'easeInOutQuint',
});

function Navbar() {
    return (
        <header>
            <nav>
                <div className="logo" onClick={() => scroll.scrollToTop(0, 0)}>
                    <img src={logo} alt="logo" />
                    <img src={oliver} alt="Oliver Dahlin" />
                </div>

                <ul>
                    <li><Link activeClass="active" to="#" spy="true" smooth={true} offset={0} duration={500}>Home</Link></li>
                    <li><Link activeClass="active" to="about" spy="true" smooth={true} offset={0} duration={500}>About</Link></li>
                    <li><Link activeClass="active" to="projects" spy="true" smooth={true} offset={0} duration={500}>Projects</Link></li>
                    <li><Link activeClass="active" to="contact" spy="true" smooth={true} offset={0} duration={500}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;