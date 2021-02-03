import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Hero/Home';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
