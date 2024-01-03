import { HashLink as Link } from 'react-router-hash-link';
import styles from './NavBar.module.css';
import { IoReorderThree } from 'react-icons/io5';
import { useEffect, useState } from 'react';
{
  /* <IoReorderThree /> */
}

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
        <h1 className={styles.logo}>Chan</h1>
        {/* {window.innerWidth < 600 ? (
          <div>
            <IoReorderThree />
          </div>
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
        )} */}
        <div>
          <IoReorderThree />
        </div>
      </div>
    </>
  );
}

export default NavBar;
