import './Navbar.css';

const links = document.querySelectorAll('a');
console.log(links);

links.forEach(links => {
    links.addEventListener('click', function () {
        links.forEach(links => links.classList.remove('active'));
        this.classList.add('active');
    });
});

function Navbar() {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;