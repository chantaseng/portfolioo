import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home2 from './sections/home/Home2';
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
        {/* <NavBar /> */}
        {/* <NavBar1 /> */}

        {/* <Home /> */}
        {/* <About /> */}
        {/* <Projects /> */}
        {/* <Contact /> */}

        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
