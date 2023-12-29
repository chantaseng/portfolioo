import styles from './About1.module.css';
import aboutImg from '../img/dog2.jpg';

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.aboutContent}>
          <div className={styles.imgContainer}>
            <img
              src={aboutImg}
              alt="dog pic"
              className={styles.aboutImg__img}
            />
          </div>

          <div className={styles.textContainer}>
            <h3>About me</h3>
            <h4>
              A passionate Front-End Developer <br /> from Montreal, Canada
            </h4>
            <p>
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
