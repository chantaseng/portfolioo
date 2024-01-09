import styles from './Projects.module.css';
import CardPigGame from '../components/CardPigGame';
import CardNetflex from '../components/CardNetflex';
import Card from '../components/Card';

function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.projectsContent}>
          <div className={styles.titleContent}>
            <p className={styles.header}>Portfolio</p>
            <h3 className={styles.subheader}>
              Built from scratch and from the bottom of my ❤️
            </h3>
          </div>

          <div className={styles.projectsGrid}>
            <CardNetflex />
            <CardPigGame reverse={true} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
