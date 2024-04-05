import styles from './Home2.module.css';
import { CiLinkedin } from 'react-icons/ci';
import { VscGithubAlt } from 'react-icons/vsc';

const Home2 = () => {
  return (
    <>
      <section id="home" className={styles.section}>
        <div className={styles.container}>
          <div>
            <h1 className={styles.header}>Junior Frontend Developer</h1>
            <p className={styles.text}>
              Hi, my name is William Chan. I am a Frontend Developer, currently
              in Montreal, Canada. 📍
            </p>

            <div className={styles.icons}>
              <a
                href="https://www.linkedin.com/in/william-chan-1163b1248/"
                target="blank"
              >
                <CiLinkedin size={25} />
              </a>
              <a href="https://github.com/chantaseng" target="blank">
                <VscGithubAlt size={25} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home2;
