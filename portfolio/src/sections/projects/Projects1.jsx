import styles from './Projects1.module.css';
import CardPigGame from '../../components/cards/CardPigGame';
import CardNetflex from '../../components/cards/CardNetflex';
import CardOuva from '../../components/cards/CardOuva';

const Projects1 = () => {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.projectsContent}>
          <div className={styles.titleContent}>
            <h3 className={styles.header}>Recent Projects</h3>
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
};

export default Projects1;
