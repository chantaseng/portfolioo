import styles from './Card1.module.css';
import netflex from '../img/netflex.png';
import { VscGithubAlt } from 'react-icons/vsc';
import { IoIosGlobe } from 'react-icons/io';

function Card1({ reverse }) {
  const flexDirection = reverse
    ? `${styles.card} ${styles.reverse}`
    : styles.card;

  return (
    <>
      <div className={flexDirection}>
        <div className={styles.imageContainer}>
          <a href="netflex1.netlify.app">
            <img className={styles.image} src={netflex} alt="movie app" />
          </a>
        </div>

        <div className={styles.textContainer}>
          <h3 className={styles.title}>Netflex 🍿</h3>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            animi dolor impedit, praesentium esse nisi Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Temporibus animi dolor impedit,
            praesentium esse nisi
          </p>

          <div className={styles.languages}>
            <div className={styles.language}>
              <p>React</p>
            </div>
            <div className={styles.language}>
              <p>CSS</p>
            </div>
          </div>

          <div className={styles.links}>
            <div className={styles.link}>
              <a
                href="https://github.com/chantaseng/netflex/tree/main/netflex"
                target="blank"
              >
                Code <VscGithubAlt className={styles.emoji} />
              </a>
            </div>
            <div className={styles.link}>
              <a href="#" target="blank">
                Demo <IoIosGlobe className={styles.emoji} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card1;
