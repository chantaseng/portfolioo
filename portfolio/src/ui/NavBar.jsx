import { HashLink as Link } from 'react-router-hash-link';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <>
      <div className={styles.navContainer}>
        <nav>
          <div className={styles.mainContainer}>
            <p>William</p>

            <div>
              <ul className={styles.linkContainer}>
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
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
