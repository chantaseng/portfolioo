import { HashLink as Link } from 'react-router-hash-link';
import { useState } from 'react';

import styles from './Navbar.module.css';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <header className={styles.navbar}>
        <Link to="#home" smooth>
          <h2>Will.dev</h2>
        </Link>
        <nav>
          <ul
            className={
              nav ? [styles.menu, styles.active].join(' ') : [styles.menu]
            }
          >
            <Link to="#home" smooth>
              <li>
                <a>Home</a>
              </li>
            </Link>
            <Link to="#about" smooth>
              <li>
                <a>About</a>
              </li>
            </Link>
            <Link to="#projects" smooth>
              <li>
                <a>Projects</a>
              </li>
            </Link>
            <Link to="#contact" smooth>
              <li>
                <a>Contact</a>
              </li>
            </Link>
          </ul>
        </nav>
        <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </header>
    </>
  );
};

export default Navbar;
