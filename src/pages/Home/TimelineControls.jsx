import { ArrowDownUp, LayoutGrid, List } from 'lucide-react';

export default function TimelineControls({ 
  isAscending, 
  setIsAscending, 
  isMosaic, 
  setIsMosaic 
}) {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 py-8 px-4 border-b border-border">
      
      {/* Navegação Rápida (Anchor links) */}
      <div className="flex flex-wrap gap-2 justify-center">
        <a href="#BGS 2022" className="px-4 py-2 bg-surface rounded-full text-sm font-medium hover:bg-brand-primary hover:text-white transition-colors border border-border">
          BGS 2022
        </a>
        <a href="#BGS 2023" className="px-4 py-2 bg-surface rounded-full text-sm font-medium hover:bg-brand-primary hover:text-white transition-colors border border-border">
          BGS 2023
        </a>
        <a href="#Turma de jogos 3 (2024-2025)" className="px-4 py-2 bg-surface rounded-full text-sm font-medium hover:bg-brand-primary hover:text-white transition-colors border border-border">
          Turma 3
        </a>
      </div>

      {/* Opções de Exibição */}
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setIsAscending(!isAscending)}
          className="flex items-center gap-2 px-4 py-2 bg-surface rounded-full text-sm font-medium hover:bg-surface-raised transition-colors border border-border"
        >
          <ArrowDownUp className="w-4 h-4" />
          {isAscending ? 'Mais Antigos' : 'Mais Recentes'}
        </button>

        <div className="flex bg-surface rounded-full p-1 border border-border">
          <button 
            onClick={() => setIsMosaic(false)}
            className={`p-2 rounded-full transition-colors ${!isMosaic ? 'bg-brand-primary text-white' : 'text-text-muted hover:text-text-primary'}`}
            title="Visualização em Linha do Tempo"
          >
            <List className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setIsMosaic(true)}
            className={`p-2 rounded-full transition-colors ${isMosaic ? 'bg-brand-primary text-white' : 'text-text-muted hover:text-text-primary'}`}
            title="Visualização em Mosaico"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
