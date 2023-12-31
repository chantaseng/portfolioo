import { BrowserRouter as Router } from 'react-router-dom';
import Home from './sections/Home';
// import About from './section/About';
import About1 from './sections/About1';
// import Projects from './section/Projects';
import Projects1 from './sections/Projects1';
import Contact from './sections/Contact';
import NavBar from './components/NavBar';
// import NavBar1 from './ui/NavBar1';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        {/* <NavBar1 /> */}

        <Home />
        {/* <About /> */}
        <About1 />
        {/* <Projects /> */}
        <Projects1 />
        {/* <Contact /> */}
      </Router>
    </>
  );
}

export default App;
