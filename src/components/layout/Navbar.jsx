import { Moon, Sun, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar({ isDarkMode, toggleTheme }) {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-surface/80 border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link to="/" className="flex items-center gap-2 text-brand-primary hover:text-brand-secondary transition-colors">
            <Gamepad2 className="w-8 h-8" />
            <span className="font-display font-bold text-xl hidden sm:block">
              Jornada Games CAR
            </span>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-6">
            <Link to="/alunos" className="text-text-secondary hover:text-brand-primary font-medium transition-colors">
              Alunos
            </Link>
            <Link to="/professores" className="text-text-secondary hover:text-brand-primary font-medium transition-colors">
              Professores
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-surface-raised transition-colors text-text-muted hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
