import styles from './Projects.module.css';
import CardPigGame from '../../components/cards/pig-game-app/CardPigGame';
import CardNetflex from '../../components/cards/netflex-app/CardNetflex';
import CardOuva from '../../components/cards/ouva-app/CardOuva';
import CardWeatherApp from '../../components/cards/weather-app/CardWeatherApp';

const Projects = () => {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.projectsContent}>
          <div className={styles.titleContent}>
            <h3 className={styles.header}>Recent Projects</h3>
          </div>

          <div className={styles.projectsGrid}>
            <CardWeatherApp reverse={true} />
            <CardNetflex />
            <CardPigGame reverse={true} />
            <CardOuva />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
