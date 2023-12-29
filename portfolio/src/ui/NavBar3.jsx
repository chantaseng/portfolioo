import { HashLink as Link } from 'react-router-hash-link';
import styles from './NavBar3.module.css';

function NavBar3() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.group1}>
          <Link to="#home" smooth>
            <p>Home</p>
          </Link>
          <Link to="#about" smooth>
            <p>About</p>
          </Link>
        </div>

        <div className={styles.group2}>
          <h1>William</h1>
        </div>

        <div className={styles.group3}>
          <Link to="#projects" smooth>
            <p>Projects</p>
          </Link>
          <Link to="#contact" smooth>
            <p>Contact</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar3;

{
  /* <div className={styles.links}>
          <Link to="#home" smooth>
            <p>Home</p>
          </Link>
          <Link to="#about" smooth>
            <p>About</p>
          </Link>
          <div>
            <h1 className={styles.logo}>Chan</h1>
          </div>
          <Link to="#projects" smooth>
            <p>Projects</p>
          </Link>
          <Link to="#contact" smooth>
            <p>Contact</p>
          </Link>
        </div> */
}
