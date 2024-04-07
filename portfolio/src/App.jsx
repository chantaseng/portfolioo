import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './sections/home/Home';
import About from './sections/about/About';
import Projects from './sections/projects/Projects';
import Contact from './sections/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Home />
        <About />
        <Projects />
        <Contact />

        <Footer />
      </Router>
    </>
  );
}

export default App;
