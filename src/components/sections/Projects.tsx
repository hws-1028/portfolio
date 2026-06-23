import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiEye, FiGithub } from 'react-icons/fi';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { projects } from '../../data/data';
import type { Project } from '../../data/data';
import variedadesDaniiImg from '../../assets/variedadesDanii.png';
import simetricaImg from '../../assets/simetrica.png';
import giraldoImg from '../../assets/giraldo.png';
import portfolioImg from '../../assets/portfolio.png';
import styles from './Projects.module.css';

const projectImages: Record<string, string> = {
  'variedades-danii': variedadesDaniiImg,
  simetrica: simetricaImg,
  'giraldo-leguizamon': giraldoImg,
  portfolio: portfolioImg,
};

const VISIBLE_PER_PAGE = 2;
const AUTO_INTERVAL = 5000;

function chunk<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

const pages = chunk(projects, VISIBLE_PER_PAGE);

function ProjectCard({ project }: { project: Project }) {
  const imgSrc = projectImages[project.id] || project.thumbnail;

  return (
    <GlassCard className={styles.card}>
      <div className={styles.thumbnail}>
        {imgSrc ? (
          <img src={imgSrc} alt={project.title} className={styles.thumbnailImg} />
        ) : (
          <div className={styles.thumbnailPlaceholder}>
            <span>{project.title}</span>
          </div>
        )}
      </div>

      <div className={styles.body}>
        <div className={styles.header}>
          <span className={styles.period}>{project.period}</span>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.type}>{project.type}</p>
        </div>

        <div className={styles.stackRow}>
          {project.stack.map((tech) => (
            <span key={tech} className={styles.chip}>{tech}</span>
          ))}
        </div>

        <div className={styles.actions}>
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
            <FiEye size={14} />
            Demo
          </a>
          <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className={`${styles.actionBtn} ${styles.actionBtnOutline}`}>
            <FiGithub size={14} />
            Código
          </a>
        </div>
      </div>
    </GlassCard>
  );
}

export function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const totalPages = pages.length;

  const nextPage = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  useEffect(() => {
    if (paused || totalPages <= 1) return;
    const id = setInterval(nextPage, AUTO_INTERVAL);
    return () => clearInterval(id);
  }, [nextPage, paused, totalPages]);

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader
          tag="Portafolio"
          title="Mi Portafolio"
          highlightWord="Portafolio"
          description="Proyectos freelance donde diseñé, desarrollé y desplegué soluciones completas."
        />

        <div
          className={styles.carousel}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className={styles.viewport}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                className={styles.page}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                {pages[currentPage].map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {totalPages > 1 && (
          <div className={styles.dots}>
            {pages.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === currentPage ? styles.dotActive : ''}`}
                onClick={() => setCurrentPage(i)}
                aria-label={`Ir a página ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
