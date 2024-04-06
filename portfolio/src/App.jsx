import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home2 from './sections/home/Home2';
import About1 from './sections/about/About1';
import Projects1 from './sections/projects/Projects1';
import Contact1 from './sections/contact/Contact1';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
// import NavBar1 from './ui/NavBar1';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home2 />
        <About1 />
        <Projects1 />
        <Contact1 />
        {/* <NavBar /> */}
        {/* <NavBar1 /> */}

        {/* <Home /> */}
        {/* <About /> */}
        {/* <Projects /> */}
        {/* <Contact /> */}

        <Footer />
      </Router>
    </>
  );
}

export default App;
