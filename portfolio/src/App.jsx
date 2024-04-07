import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home2 from './sections/home/Home2';
import About1 from './sections/about/About1';
import Projects1 from './sections/projects/Projects1';
import Contact1 from './sections/contact/Contact1';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Home2 />
        <About1 />
        <Projects1 />
        <Contact1 />

        <Footer />
      </Router>
    </>
  );
}

export default App;
