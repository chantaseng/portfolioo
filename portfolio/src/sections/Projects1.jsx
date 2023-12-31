import styles from './Projects1.module.css';
import about from '../img/about.jpg';
import { VscGithubAlt } from 'react-icons/vsc';
import { IoIosGlobe } from 'react-icons/io';

function Projects1() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.containerTitle}>Portfolio</p>
        <h3 className={styles.subheader}>
          Built from scratch and from the bottom of my ❤️
        </h3>

        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img className={styles.image} src={about} alt="dog" />
          </div>

          <div className={styles.textContainer}>
            <h3 className={styles.title}>Project #1</h3>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus animi dolor impedit, praesentium esse nisi Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Temporibus animi
              dolor impedit, praesentium esse nisi
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
                <a href="#">
                  Code <VscGithubAlt className={styles.emoji} />
                </a>
              </div>
              <div className={styles.link}>
                <a href="#">
                  Demo <IoIosGlobe className={styles.emoji} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects1;
