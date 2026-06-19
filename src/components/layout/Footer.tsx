import { FiLinkedin, FiGithub, FiMail, FiHeart } from 'react-icons/fi';
import { personalInfo } from '../../data/data';
import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.links}>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className={styles.link}
            aria-label="Correo electrónico"
          >
            <FiMail size={18} />
          </a>
          <a
            href={personalInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label="WhatsApp"
          >
            <FiGithub size={18} />
          </a>
        </div>

        <p className={styles.copy}>
          &copy; {year} {personalInfo.name}. Hecho con <FiHeart size={13} className={styles.heart} /> en Armenia, Colombia.
        </p>
      </div>
    </footer>
  );
}
