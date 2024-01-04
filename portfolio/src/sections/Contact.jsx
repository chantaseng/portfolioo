import styles from './Contact.module.css';
import { IoMailOutline } from 'react-icons/io5';
import { CiLinkedin } from 'react-icons/ci';

function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contactContent}>
          <div>
            <p className={styles.header}>Contact</p>
            <h3 className={styles.subheader}>Say hi, I don&apos;t bite 🙋🏻‍♂️</h3>
          </div>

          <div className={styles.infos}>
            <div className={styles.info}>
              <span className={styles.icon}>
                <IoMailOutline />
              </span>
              <div className={styles.email}>
                <p>
                  <a href="mailto:chan.william.ts@gmail.com">
                    chan.william.ts@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className={styles.info}>
              <span className={styles.icon}>
                <CiLinkedin />
              </span>

              <div className={styles.email}>
                <p>
                  <a
                    href="https://www.linkedin.com/in/william-chan-1163b1248/"
                    target="blank"
                  >
                    LinkedIn
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
