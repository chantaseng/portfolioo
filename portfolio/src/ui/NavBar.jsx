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
                  <Link to="#home">Home</Link>
                </li>
                <li>
                  <Link to="#about">About</Link>
                </li>
                <li>
                  <Link to="#projects">Projects</Link>
                </li>
                <li>
                  <Link to="#contact">Contact</Link>
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
