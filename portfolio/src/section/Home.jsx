import styles from './Home.module.css';
import { CiLinkedin } from 'react-icons/ci';
import { VscGithubAlt } from 'react-icons/vsc';

function Home() {
  return (
    <div className={styles.homeContainer}>
      <section id="home">
        <div className={styles.container}>
          <h1 className={styles.title}>Front-End React Developer</h1>
          <p>
            Hi, my name is William Chan. I am a Front-End Developer, currently
            living in Montreal, Canada. 📍
          </p>
          <div>
            <span>
              <CiLinkedin />
              <VscGithubAlt />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
