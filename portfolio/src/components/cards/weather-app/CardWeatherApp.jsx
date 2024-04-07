import styles from './CardWeatherApp.module.css';
import homepage from '../../../img/weather-forecast/weather-app-typescript.png';
import locationSearch from '../../../img/weather-forecast/location-search.png';
import forecast from '../../../img/weather-forecast/weather-forecast.png';
import { VscGithubAlt } from 'react-icons/vsc';
import { IoIosGlobe } from 'react-icons/io';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useState } from 'react';

const CardWeatherApp = ({ reverse }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const flexDirection = reverse
    ? `${styles.card} ${styles.reverse}`
    : styles.card;

  const slides = [homepage, locationSearch, forecast];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className={flexDirection}>
        <div>
          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              src={slides[currentIndex]}
              alt="OUVA homepage"
            />

            <div>
              <a className={styles.prev} onClick={handlePrev}>
                <IoIosArrowBack />
              </a>
              <a className={styles.next} onClick={handleNext}>
                <IoIosArrowForward />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.textContainer}>
          <h3 className={styles.title}>WEATHER FORECAST 🌤️</h3>
          <p className={styles.text}>
            When preparing for a vacation or a camping trip, we all want to know
            exactly what the weather will be to avoid headaches. With this
            forecast app, all you need to do is write your destination, choose a
            location option in the dropdown and voilà! You can now sleep easy
            and nightmare free.
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
              <p>Typescript</p>
            </div>
          </div>

          <div className={styles.links}>
            <div className={styles.link}>
              <a
                href="https://github.com/chantaseng/weather-app-react-typescript"
                target="blank"
              >
                Code <VscGithubAlt className={styles.emoji} />
              </a>
            </div>
            <div className={styles.link}>
              <a
                href="https://weather-app-typescript-chantaseng.netlify.app"
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
};

export default CardWeatherApp;
