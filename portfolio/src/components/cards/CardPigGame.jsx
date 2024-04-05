import styles from './CardPigGame.module.css';
import pigGame from '../../img/pig-game.png';
import { VscGithubAlt } from 'react-icons/vsc';
import { IoIosGlobe } from 'react-icons/io';

function CardPigGame({ reverse }) {
  const flexDirection = reverse
    ? `${styles.card} ${styles.reverse}`
    : styles.card;

  return (
    <>
      <div className={flexDirection}>
        <div className={styles.imageContainer}>
          <a href="https://pig-game-chantaseng.netlify.app" target="blank">
            <img className={styles.image} src={pigGame} alt="Pig game" />
          </a>
        </div>

        <div className={styles.textContainer}>
          <h3 className={styles.title}>Pig Game 🐷</h3>
          <p className={styles.text}>
            Pig game is a simple dice match where the goal is to be the first
            player to reach a 100 points. The rules are simple: <br /> <br /> -
            If a player rolls 1, they score nothing and it becomes the next
            player&apos;s turn. <br /> - If the player rolls any other number,
            it is added to their current score and the player&apos;s turn
            continue. <br /> - If a player chooses to &apos;hold&apos;, their
            current score is added to their score, and it becomes te next
            player&apos;s turn
          </p>

          <div className={styles.languages}>
            <div className={styles.language}>
              <p>HTML</p>
            </div>
            <div className={styles.language}>
              <p>CSS</p>
            </div>
            <div className={styles.language}>
              <p>Javascript</p>
            </div>
          </div>

          <div className={styles.links}>
            <div className={styles.link}>
              <a href="https://github.com/chantaseng/pig-game" target="blank">
                Code <VscGithubAlt className={styles.emoji} />
              </a>
            </div>
            <div className={styles.link}>
              <a href="https://pig-game-chantaseng.netlify.app" target="blank">
                Demo <IoIosGlobe className={styles.emoji} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardPigGame;
