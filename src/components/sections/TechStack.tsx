import { motion } from 'framer-motion';
import * as SiIcons from 'react-icons/si';
import { SectionHeader } from '../ui/SectionHeader';
import { techStack } from '../../data/data';
import type { Skill } from '../../data/data';
import profileImg from '../../assets/foto-1.png';
import styles from './TechStack.module.css';

const orbitSkills: Skill[] = [
  { name: 'React', iconKey: 'SiReact', level: 95 },
  { name: 'TypeScript', iconKey: 'SiTypescript', level: 92 },
  { name: 'Node.js', iconKey: 'SiNodedotjs', level: 88 },
  { name: 'Python', iconKey: 'SiPython', level: 75 },
  { name: 'Docker', iconKey: 'SiDocker', level: 78 },
  { name: 'PostgreSQL', iconKey: 'SiPostgresql', level: 80 },
];

const iconMap = SiIcons as Record<string, React.ComponentType<{ size?: number }>>;

export function TechStack() {
  return (
    <section id="tech-stack" className="section">
      <div className="container">
        <SectionHeader
          tag="Habilidades"
          title="Mis Habilidades"
          highlightWord="Habilidades"
          description="Tecnologías con las que construyo aplicaciones completas y escalables, desde el frontend hasta el despliegue en cloud."
        />

        <div className={styles.layout}>
          <motion.div
            className={styles.leftCol}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.orbitContainer}>
              <div className={styles.photoWrap}>
                <div className={styles.photoGlow} />
                <img src={profileImg} alt="Ana Sofia" className={styles.orbitPhoto} />
              </div>

              <div className={styles.orbitRing}>
                {orbitSkills.map((skill, i) => {
                  const Icon = iconMap[skill.iconKey];
                  const angle = (i * 60) * (Math.PI / 180);
                  const radius = 48;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <div
                      key={skill.name}
                      className={styles.orbitIcon}
                      style={
                        {
                          '--ox': `${x}%`,
                          '--oy': `${y}%`,
                          animationDelay: `${i * -6}s`,
                        } as React.CSSProperties
                      }
                      title={skill.name}
                    >
                      {Icon ? <Icon size={22} /> : <span>{skill.name[0]}</span>}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.rightCol}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className={styles.categoriesGrid}>
              {techStack.map((category, ci) => (
                <motion.div
                  key={category.title}
                  className={styles.categoryCard}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: ci * 0.08 }}
                >
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                  <div className={styles.chipsGrid}>
                    {category.skills.map((skill) => {
                      const Icon = iconMap[skill.iconKey];
                      return (
                        <div key={skill.name} className={styles.chip}>
                          <span className={styles.chipIcon}>
                            {Icon ? <Icon size={14} /> : <span>{skill.name[0]}</span>}
                          </span>
                          <span className={styles.chipName}>{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
