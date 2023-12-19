import styles from './Projects.module.css';
import projectImg from '../img/dog1.jpg';

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.projectsContent}>
          <p className={styles.projectsContentHeader}>Portfolio</p>
          <h3 className={styles.projectsContentDescription}>
            Built from scratch and from the bottom of my ❤️
          </h3>
          <div className={styles.projectsGrid}>
            <div className={styles.projectCard}>
              <div className={styles.projectImg}>
                <img src={projectImg} alt="dog" />
              </div>
              <div className={styles.projectText}>
                <h3 className={styles.projectTitle}>Project #1</h3>
                <p className={styles.projectDescription}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus animi dolor impedit, praesentium esse nisi
                  recusandae id debitis, neque laboriosam ducimus perferendis
                  optio, a ipsum iure delectus aspernatur mollitia suscipit.
                </p>
                <div className={styles.stacks}>
                  <p>React</p>
                  <p>CSS</p>
                </div>
                <div className={styles.links}>
                  <a href="#">Code</a>
                  <a href="#">Demo</a>
                </div>
              </div>
            </div>

            <div className={styles.projectCard}>
              <div className={styles.projectImg}>
                <img src={projectImg} alt="dog" />
              </div>
              <div className={styles.projectText}>
                <h3 className={styles.projectTitle}>Project #2</h3>
                <p className={styles.projectDescription}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus animi dolor impedit, praesentium esse nisi
                  recusandae id debitis, neque laboriosam ducimus perferendis
                  optio, a ipsum iure delectus aspernatur mollitia suscipit.
                </p>
                <div className={styles.stacks}>
                  <p>React</p>
                  <p>CSS</p>
                </div>
                <div className={styles.links}>
                  <a href="#">Code</a>
                  <a href="#">Demo</a>
                </div>
              </div>
            </div>

            <div className={styles.projectCard}>
              <div className={styles.projectImg}>
                <img src={projectImg} alt="dog" />
              </div>
              <div className={styles.projectText}>
                <h3 className={styles.projectTitle}>Project #3</h3>
                <p className={styles.projectDescription}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus animi dolor impedit, praesentium esse nisi
                  recusandae id debitis, neque laboriosam ducimus perferendis
                  optio, a ipsum iure delectus aspernatur mollitia suscipit.
                </p>
                <div className={styles.stacks}>
                  <p>React</p>
                  <p>CSS</p>
                </div>
                <div className={styles.links}>
                  <a href="#">Code</a>
                  <a href="#">Demo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
