import styles from './CardOuva.module.css';
import homepage from '../../../img/ouva-img/homepage.png';
import destination from '../../../img/ouva-img/destination.png';
import activityDescription from '../../../img/ouva-img/activity-description.png';
import itinerary from '../../../img/ouva-img/itinerary.png';
import review from '../../../img/ouva-img/review.png';
import { VscGithubAlt } from 'react-icons/vsc';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useState } from 'react';

function CardOuva({ reverse }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const flexDirection = reverse
    ? `${styles.card} ${styles.reverse}`
    : styles.card;

  const slides = [
    homepage,
    destination,
    activityDescription,
    itinerary,
    review,
  ];

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
          <h3 className={styles.title}>OUVA 🌎</h3>
          <p className={styles.text}>
            OUVA is a travel planning application for travel enthusiasts. This
            idea was conceptualized as part of my final team project at Le Wagon
            Montreal. Crafted with Ruby, Rails, Javascript, HTML and CSS,
            discover what our beautiful planet has to offer with numerous off
            beaten path activities and marvelous destinations to visit. It is
            only at OUVA, that you can feel alive again!
          </p>

          <div className={styles.languages}>
            <div className={styles.language}>
              <p>Ruby</p>
            </div>
            <div className={styles.language}>
              <p>Rails</p>
            </div>
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
              <a href="https://github.com/chantaseng/ouva" target="blank">
                Code <VscGithubAlt className={styles.emoji} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardOuva;
