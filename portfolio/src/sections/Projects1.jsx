import styles from './Projects1.module.css';
import Card from '../components/Card';

function Projects1() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.projectsContent}>
          <p className={styles.header}>Portfolio</p>
          <h3 className={styles.subheader}>
            Built from scratch and from the bottom of my ❤️
          </h3>

          <div className={styles.projectsGrid}>
            <Card />
            <Card reverse={true} />
            <Card />
            <Card reverse={true} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects1;
