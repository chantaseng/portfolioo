import { HashLink as Link } from 'react-router-hash-link';
import { useEffect, useState } from 'react';

import styles from './NavBar.module.css';
import Dropdown from './Dropdown';

function NavBar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(function () {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Link to="#home" smooth style={{ textDecoration: 'none' }}>
          <h1 className={styles.logo}>Chan</h1>
        </Link>
        {window.innerWidth < 900 ? (
          <Dropdown />
        ) : (
          <div className={styles.links}>
            <Link to="#home" smooth>
              <p>Home</p>
            </Link>
            <Link to="#about" smooth>
              <p>About</p>
            </Link>
            <Link to="#projects" smooth>
              <p>Projects</p>
            </Link>
            <Link to="#contact" smooth>
              <p>Contact</p>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default NavBar;
