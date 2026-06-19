import { motion } from 'framer-motion';
import { FiMessageCircle, FiZap, FiRefreshCw } from 'react-icons/fi';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { aboutText, softSkills, languages } from '../../data/data';
import styles from './About.module.css';

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  MessageCircle: FiMessageCircle,
  Lightbulb: FiZap,
  RefreshCw: FiRefreshCw,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeader
          tag="Sobre mí"
          title="Sobre mí"
          description="Una desarrolladora comprometida con crear soluciones que marcan la diferencia."
        />

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.textCol}>
            {aboutText.map((paragraph, i) => (
              <p key={i} className={styles.paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className={styles.rightCol}>
            <motion.div
              className={styles.cardsGrid}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {softSkills.map((card, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <GlassCard className={styles.skillCard}>
                    <div className={styles.skillIcon}>
                      {(() => {
                        const Icon = iconMap[card.icon];
                        return Icon ? <Icon size={22} /> : <FiZap size={22} />;
                      })()}
                    </div>
                    <div className={styles.skillInfo}>
                      <h3 className={styles.skillTitle}>{card.title}</h3>
                      <p className={styles.skillDesc}>{card.description}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className={styles.languages}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <span className={styles.langLabel}>Idiomas:</span>
              {languages.map((lang, i) => (
                <span key={lang.name} className={styles.langItem}>
                  {lang.name} <span className={styles.langLevel}>{lang.level}</span>
                  {i < languages.length - 1 && <span className={styles.langSep}>·</span>}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
