import { HashLink as Link } from 'react-router-hash-link';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.logo}>Chan</h1>
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
        {/* </div> */}
      </div>
    </>
  );
}

export default NavBar;
