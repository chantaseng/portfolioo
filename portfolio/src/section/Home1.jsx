import styles from './Home1.module.css';
import { CiLinkedin } from 'react-icons/ci';
import { VscGithubAlt } from 'react-icons/vsc';

function Home1() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Front-End React Developer</h1>
          <p>
            Hi, my name is William Chan. I am a Front-End Developer, currently
            in Montreal, Canada. 📍
          </p>

          <span>
            <div className={styles.icons}>
              <CiLinkedin />
              <VscGithubAlt />
            </div>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Home1;
