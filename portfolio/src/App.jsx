import { BrowserRouter as Router } from 'react-router-dom';
// import Home1 from './section/Home1';
import Home2 from './section/Home2';
import About from './section/About';
import Projects from './section/Projects';
import Contact from './section/Contact';
// import NavBar1 from './ui/NavBar1';
import NavBar2 from './ui/NavBar2';
// import NavBar3 from './ui/NavBar3';

function App() {
  return (
    <>
      <Router>
        {/* <NavBar1 /> */}
        <NavBar2 />
        {/* <NavBar3 /> */}

        {/* <Home1 /> */}
        <Home2 />
        <About />
        {/* <Projects /> */}
        {/* <Contact /> */}
      </Router>
    </>
  );
}

export default App;
