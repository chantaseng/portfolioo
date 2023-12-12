import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './ui/NavBar';
import Home from './section/Home';
import About from './section/About';
import Projects from './section/Projects';
import Contact from './section/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Home />
        <About />
        <Projects />
        <Contact />
      </BrowserRouter>
    </div>
  );
}

export default App;
