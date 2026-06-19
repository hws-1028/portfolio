import { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FiHome,
  FiUser,
  FiCode,
  FiBriefcase,
  FiBookOpen,
  FiMail,
  FiMenu,
  FiX,
} from 'react-icons/fi';
import { ThemeToggle } from './ThemeToggle';
import { useScrollTo } from '../../hooks/useScrollTo';
import styles from './FloatingMenu.module.css';

interface FloatingMenuProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const navItems = [
  { id: 'hero', icon: FiHome, label: 'Inicio' },
  { id: 'about', icon: FiUser, label: 'Sobre mí' },
  { id: 'tech-stack', icon: FiCode, label: 'Habilidades' },
  { id: 'projects', icon: FiBriefcase, label: 'Proyectos' },
  { id: 'education', icon: FiBookOpen, label: 'Formación' },
  { id: 'contact', icon: FiMail, label: 'Contacto' },
];

export function FloatingMenu({ theme, onToggleTheme }: FloatingMenuProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTo = useScrollTo();

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const handleNav = useCallback((id: string) => {
    setOpen(false);
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scrollTo(id);
    }
  }, [scrollTo]);

  return (
    <div ref={containerRef} className={styles.pill}>
      <button
        className={styles.navBtn}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
      >
        {open ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <motion.div
              className={styles.divider}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.15 }}
            />

            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                className={styles.navBtn}
                onClick={() => handleNav(item.id)}
                aria-label={item.label}
                title={item.label}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03, duration: 0.2 }}
              >
                <item.icon size={20} />
              </motion.button>
            ))}

            <motion.div
              className={styles.divider}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.15 }}
            />

            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.03, duration: 0.2 }}
            >
              <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
