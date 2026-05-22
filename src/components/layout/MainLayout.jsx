import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function MainLayout({ children }) {
  // Inicializa o tema baseado na preferência do sistema se não houver no localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      if (typeof window !== 'undefined') {
        const saved = window.localStorage.getItem('theme');
        if (saved) return saved === 'dark';
        if (window.matchMedia) {
          return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
      }
    } catch (error) {
      console.warn("Could not read theme from localStorage/matchMedia", error);
    }
    return true; // Padrão: modo escuro
  });

  // Atualiza a classe 'dark' no html toda vez que o estado mudar
  useEffect(() => {
    const htmlEl = document.documentElement;
    try {
      if (isDarkMode) {
        htmlEl.classList.add('dark');
        window.localStorage.setItem('theme', 'dark');
      } else {
        htmlEl.classList.remove('dark');
        window.localStorage.setItem('theme', 'light');
      }
    } catch (e) {
      console.warn("Could not save theme to localStorage", e);
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      {/* Container principal de conteúdo que expande e preenche a tela */}
      <main className="flex-grow w-full flex flex-col">
        {children}
      </main>

      <Footer />
    </div>
  );
}
