import styles from './CardNetflex.module.css';
import netflex from '../../../img/netflex.png';
import { VscGithubAlt } from 'react-icons/vsc';
import { IoIosGlobe } from 'react-icons/io';

function CardNetflex({ reverse }) {
  const flexDirection = reverse
    ? `${styles.card} ${styles.reverse}`
    : styles.card;

  return (
    <>
      <div className={flexDirection}>
        <div className={styles.imageContainer}>
          <a href="https://netflex1.netlify.app" target="blank">
            <img className={styles.image} src={netflex} alt="movie app" />
          </a>
        </div>

        <div className={styles.textContainer}>
          <h3 className={styles.title}>Netflex 🍿</h3>
          <p className={styles.text}>
            Netflex is a clone website of Netflix where you can know what are
            the hottest and trendiest movies and tv shows in Hollywood right
            now. Intrigue by a movie, you can search on Netflex to get more
            information about it. Whether it is about the release date or your
            favorite actors or actresses. Don&apos;t forget to create an account
            to save the movie in your watchlist so you can watch them later!
          </p>

          <div className={styles.languages}>
            <div className={styles.language}>
              <p>React</p>
            </div>
            <div className={styles.language}>
              <p>TailwindCSS</p>
            </div>
            <div className={styles.language}>
              <p>Javascript</p>
            </div>
            <div className={styles.language}>
              <p>Axios</p>
            </div>
            <div className={styles.language}>
              <p>Firestore</p>
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
              <a href="https://netflex1.netlify.app" target="blank">
                Demo <IoIosGlobe className={styles.emoji} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardNetflex;
