import styles from './About1.module.css';
import about from '../img/about.jpg';

function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imgDiv}>
            <img src={about} alt="developer pic" className={styles.image} />
          </div>

          <div className={styles.textContainer}>
            <h3 className={styles.title}>About me</h3>
            <h4 className={styles.subheader}>
              A passionate Front-End Developer <br /> from Montreal, Canada
            </h4>
            <p className={styles.text}>
              As a Junior Front-End Developer, I bring a robust set of skills
              encompassing HTML, CSS, JavaScript, React, Tailwind, and SCSS. My
              specialization lies in creating and maintaining responsive
              websites that prioritize a seamless user experience. I have a
              knack for developing dynamic and captivating interfaces by
              employing efficient and well-organized code. Beyond individual
              contributions, I thrive as a collaborative team member, working
              seamlessly with cross-functional teams to deliver exceptional web
              applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
