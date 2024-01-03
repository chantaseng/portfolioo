import styles from './Home.module.css';
import { CiLinkedin } from 'react-icons/ci';
import { VscGithubAlt } from 'react-icons/vsc';

function Home() {
  return (
    <section id="home" className={styles.section}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.header}>Front-End React Developer</h1>
          <p className={styles.text}>
            Hi, my name is William Chan. I am a Front-End Developer, currently
            in Montreal, Canada. 📍
          </p>

          <div className={styles.icons}>
            <CiLinkedin />
            <VscGithubAlt />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
