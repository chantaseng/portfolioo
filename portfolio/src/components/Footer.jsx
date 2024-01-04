import { CiLinkedin } from 'react-icons/ci';
import { VscGithubAlt } from 'react-icons/vsc';
import styles from './Footer.module.css';

function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div>
            <p className={styles.text}>Copyright &#169; 2024</p>
          </div>
          <div className={styles.icons}>
            <a
              href="https://www.linkedin.com/in/william-chan-1163b1248/"
              target="blank"
            >
              <CiLinkedin />
            </a>
            <a href="https://github.com/chantaseng" target="blank">
              <VscGithubAlt />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
