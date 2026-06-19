import type { ReactNode, HTMLAttributes } from 'react';
import styles from './GlassCard.module.css';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverable?: boolean;
}

export function GlassCard({ children, hoverable = true, className = '', ...props }: GlassCardProps) {
  const classNames = [
    styles.card,
    hoverable ? styles.hoverable : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}
