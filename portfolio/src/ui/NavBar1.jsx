import { HashLink as Link } from 'react-router-hash-link';
import styles from './NavBar1.module.css';

function NavBar1() {
  return (
    <>
      <nav className={styles.navContainer}>
        <div className={styles.container}>
          <h3 className={styles.logo}>William</h3>

          <ul className={styles.ulContainer}>
            <li>
              <Link to="#home" smooth>
                Home
              </Link>
            </li>
            <li>
              <Link to="#about" smooth>
                About
              </Link>
            </li>
            <li>
              <Link to="#projects" smooth>
                Projects
              </Link>
            </li>
            <li>
              <Link to="#contact" smooth>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar1;
