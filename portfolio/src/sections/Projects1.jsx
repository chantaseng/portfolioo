import styles from './Projects1.module.css';
import about from '../img/about.jpg';
import { VscGithubAlt } from 'react-icons/vsc';
import { IoIosGlobe } from 'react-icons/io';
import Card from '../components/Card';

function Projects1() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.containerTitle}>Portfolio</p>
        <h3 className={styles.subheader}>
          Built from scratch and from the bottom of my ❤️
        </h3>

        <Card />
        <Card />
      </div>
    </section>
  );
}

export default Projects1;
