import { BrowserRouter } from 'react-router-dom';
import Home1 from './section/Home1';
import About from './section/About';
import Projects from './section/Projects';
import Contact from './section/Contact';
import NavBar1 from './ui/NavBar1';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar1 />

        <Home1 />
        <About />
        <Projects />
        <Contact />
      </BrowserRouter>
    </>
  );
}

export default App;
