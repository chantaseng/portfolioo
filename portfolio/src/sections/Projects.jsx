import styles from './Projects.module.css';
import CardPigGame from '../components/cards/CardPigGame';
import CardNetflex from '../components/cards/CardNetflex';
// import Card from '../components/cards/Card';
import CardOuva from '../components/cards/CardOuva';

function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.projectsContent}>
          <div className={styles.titleContent}>
            <p className={styles.header}>Recent Projects</p>
            {/* <h3 className={styles.subheader}>
              Built from scratch and from the bottom of my ❤️
            </h3> */}
          </div>

          <div className={styles.projectsGrid}>
            <CardNetflex />
            <CardPigGame reverse={true} />
            <CardOuva />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
