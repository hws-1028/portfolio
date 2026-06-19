import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { education } from '../../data/data';
import styles from './Education.module.css';

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeader
          tag="Formación"
          title="Mi Formación"
          highlightWord="Formación"
          description="La base académica que respalda mi desarrollo profesional."
        />

        <div className={styles.grid}>
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <GlassCard className={styles.card}>
                <div className={styles.iconWrapper}>
                  <FiBookOpen size={20} />
                </div>
                <span className={styles.period}>{edu.period}</span>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <p className={styles.institution}>{edu.institution}</p>
                <p className={styles.description}>{edu.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
