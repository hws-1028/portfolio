import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  tag: string;
  title: string;
  highlightWord?: string;
  description?: string;
}

export function SectionHeader({ tag, title, highlightWord, description }: SectionHeaderProps) {
  const renderTitle = () => {
    if (!highlightWord) return <h2 className={styles.title}>{title}</h2>;

    const prefix = title.replace(highlightWord, '').trimEnd();
    return (
      <h2 className={styles.title}>
        {prefix}{' '}
        <span className={styles.highlight}>{highlightWord}</span>
      </h2>
    );
  };

  return (
    <div className={styles.header}>
      <span className={styles.tag}>{tag}</span>
      {renderTitle()}
      {description && <p className={styles.description}>{description}</p>}
      <div className={styles.divider} />
    </div>
  );
}
