import styles from './Home2.module.css';
import { CiLinkedin } from 'react-icons/ci';
import { VscGithubAlt } from 'react-icons/vsc';
import me from '../img/dog1.jpg';

function Home1() {
  return (
    <section id="home" className={styles.section}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>Front-End React Developer</h1>
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

export default Home1;
