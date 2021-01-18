import './Hero.css';

function Hero() {
    return (
        <section className="hero">
            <h1>Hello.</h1>
            <h2>I'm Oliver Dahlin</h2>
            <h4>A junior developer with passion for UI/UX design</h4>
            <button>My work <i className="fas fa-arrow-right"></i></button>

            <div className="socials">
                <a href="https://www.facebook.com/oliver.dalin/" target="_blank"><i id="facebook" className="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/oliiver.dahliin/" target="_blank"><i id="instagram" className="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/oliver-dahlin-8056571b5/" target="_blank"><i id="linked-in" className="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/DahlinOliver" target="_blank"><i id="github" className="fab fa-github"></i></a>
                <div id="vertical-line"></div>
            </div>
        </section>
    )
}

export default Hero;