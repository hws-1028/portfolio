import { FloatingMenu } from '../ui/FloatingMenu';

interface HeaderProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export function Header({ theme, onToggleTheme }: HeaderProps) {
  return <FloatingMenu theme={theme} onToggleTheme={onToggleTheme} />;
}
