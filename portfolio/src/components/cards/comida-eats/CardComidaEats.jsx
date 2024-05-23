import styles from './CardComidaEats.module.css';
import comidaeats from '../../../img/comidaeats.png';
import { VscGithubAlt } from 'react-icons/vsc';
import { IoIosGlobe } from 'react-icons/io';

function CardComidaEats({ reverse }) {
  const flexDirection = reverse
    ? `${styles.card} ${styles.reverse}`
    : styles.card;

  return (
    <>
      <div className={flexDirection}>
        <div className={styles.imageContainer}>
          <a
            href="https://comida-food-ordering-app-frontend.onrender.com"
            target="blank"
          >
            <img
              className={styles.image}
              src={comidaeats}
              alt="food ordering app"
            />
          </a>
        </div>

        <div className={styles.textContainer}>
          <h3 className={styles.title}>Comida Eats 👨🏻‍🍳</h3>
          <p className={styles.text}>
            ComidaEats is a food ordering application where you can grab your
            favorite food in cities like Toronto or Montreal. Choose your
            restaurant of choice and it will be delivered right at your door
            steps.
            <br></br>
            <br></br>
            Test user: test@test.com and password: Password@1. Or you can use
            your own google sign in.
            <br></br>
            To test the order update feature, please search &quot;Montreal&quot;
            for the city and pick the restaurant &quot;Char Siu Delice&quot;.
            Card #: 4242 4242 4242 4242
          </p>

          <div className={styles.languages}>
            <div className={styles.language}>
              <p>React</p>
            </div>
            <div className={styles.language}>
              <p>TailwindCSS</p>
            </div>
            <div className={styles.language}>
              <p>Typescript</p>
            </div>
            <div className={styles.language}>
              <p>Auth0</p>
            </div>
            <div className={styles.language}>
              <p>Stripe</p>
            </div>
            <div className={styles.language}>
              <p>MongoDB</p>
            </div>
          </div>

          <div className={styles.links}>
            <div className={styles.link}>
              <a
                href="https://github.com/chantaseng/comida-food-ordering-app-frontend"
                target="blank"
              >
                Code <VscGithubAlt className={styles.emoji} />
              </a>
            </div>
            <div className={styles.link}>
              <a
                href="https://comida-food-ordering-app-frontend.onrender.com/"
                target="blank"
              >
                Demo <IoIosGlobe className={styles.emoji} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardComidaEats;
