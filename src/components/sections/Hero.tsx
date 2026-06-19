import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiMail, FiPhone, FiArrowDown, FiDownload } from 'react-icons/fi';
import { SiReact, SiTypescript, SiNodedotjs, SiPython, SiPostgresql, SiDocker, SiOpenjdk } from 'react-icons/si';
import { personalInfo, heroRoles } from '../../data/data';
import { useScrollTo } from '../../hooks/useScrollTo';
import profileImg from '../../assets/foto-1.png';
import styles from './Hero.module.css';

const marqueeIcons = [
  { Component: SiReact, label: 'React', color: '#61DAFB' },
  { Component: SiTypescript, label: 'TypeScript', color: '#3178C6' },
  { Component: SiNodedotjs, label: 'Node.js', color: '#339933' },
  { Component: SiPython, label: 'Python', color: '#3776AB' },
  { Component: SiPostgresql, label: 'PostgreSQL', color: '#4169E1' },
  { Component: SiDocker, label: 'Docker', color: '#2496ED' },
  { Component: SiOpenjdk, label: 'Java', color: '#ED8B00' },
];

function useTypewriter(words: string[], typingSpeed = 80, deletingSpeed = 40, pauseMs = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const tick = () => {
      if (!isDeleting) {
        if (text.length < currentWord.length) {
          setText(currentWord.slice(0, text.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseMs);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timeout = setTimeout(tick, isDeleting ? deletingSpeed : text.length === 0 ? 200 : typingSpeed);
    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseMs]);

  return text;
}

export function Hero() {
  const scrollTo = useScrollTo();
  const typedRole = useTypewriter(heroRoles);

  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className={styles.greeting}>Hola, soy</span>

          <h1 className={styles.name}>Ana Sofia Ricardo</h1>

          <div className={styles.dividerLine} />

          <div className={styles.roleWrapper}>
            <span className={styles.typewriter}>{typedRole}</span>
            <span className={styles.cursor}>|</span>
          </div>

          <p className={styles.description}>{personalInfo.description}</p>

          <div className={styles.actions}>
            <button className={styles.btnPrimary} onClick={() => scrollTo('projects')}>
              Ver proyectos
            </button>
            <a href={personalInfo.cvPath} download className={styles.btnSecondary}>
              <FiDownload size={16} />
              Descargar CV
            </a>
          </div>

          <div className={styles.socialLinks}>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <FiLinkedin size={18} />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
              <FiGithub size={18} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className={styles.socialLink} aria-label="Correo electrónico">
              <FiMail size={18} />
            </a>
            <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="WhatsApp">
              <FiPhone size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <div className={styles.photoWrapper}>
            <div className={styles.photoGlow} />
            <img src={profileImg} alt="Ana Sofia Ricardo Aguilar" className={styles.photo} />
          </div>

          <div className={styles.marqueeStrip}>
            <div className={styles.marqueeTrack}>
              {marqueeIcons.map((icon, i) => (
                <div key={i} className={styles.marqueeIcon} title={icon.label}>
                  <icon.Component size={32} color={icon.color} />
                </div>
              ))}
              {marqueeIcons.map((icon, i) => (
                <div key={`dup-${i}`} className={styles.marqueeIcon} title={icon.label}>
                  <icon.Component size={32} color={icon.color} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        className={styles.scrollHint}
        onClick={() => scrollTo('about')}
        aria-label="Scroll a siguiente sección"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <FiArrowDown size={20} />
      </motion.button>
    </section>
  );
}
