import { X, Play } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function MediaModal({ event, initialMediaIndex, onClose }) {
  const [activeIndex, setActiveIndex] = useState(initialMediaIndex);
  
  // Impede scroll do body enquanto modal está aberto
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const media = event.media[activeIndex];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-sm animate-in fade-in duration-200">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-brand-primary bg-black/50 p-2 rounded-full transition-colors z-10"
      >
        <X className="w-8 h-8" />
      </button>

      <div className="w-full max-w-6xl max-h-[90vh] flex flex-col md:flex-row bg-surface rounded-xl overflow-hidden shadow-2xl">
        
        {/* Mídia Expandida (Esquerda no Desktop, Cima no Mobile) */}
        <div className="w-full md:w-2/3 h-[40vh] md:h-[80vh] bg-black flex items-center justify-center relative">
           {media.type === 'image' ? (
             <img 
               src={media.url} 
               alt={media.alt} 
               className="max-w-full max-h-full object-contain" 
             />
           ) : (
             <iframe 
               src={media.url} 
               title={media.alt || 'Video'} 
               className="w-full h-full" 
               frameBorder="0" 
               scrolling="no" 
               allowFullScreen 
             />
           )}
        </div>

        {/* Informações (Direita no Desktop, Baixo no Mobile) */}
        <div className="w-full md:w-1/3 p-6 sm:p-8 flex flex-col justify-center bg-surface overflow-y-auto">
          <span className="text-sm font-bold text-brand-secondary mb-2 block">
            {event.date}
          </span>
          <h2 className="text-3xl font-display font-bold text-text-primary mb-4">
            {event.title}
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6 text-lg">
            {event.description}
          </p>
          
          {/* Se houver mais de uma mídia, exibe a galeria com miniaturas clicáveis */}
          {event.media.length > 1 && (
            <div className="mt-auto pt-4 border-t border-border">
              <span className="text-xs text-text-muted uppercase tracking-wider font-bold">
                Galeria do Evento
              </span>
              <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
                 {event.media.map((item, idx) => (
                   <button 
                     key={idx} 
                     onClick={() => setActiveIndex(idx)}
                     className={`w-16 h-16 shrink-0 rounded border-2 overflow-hidden flex items-center justify-center bg-black transition-all ${
                       idx === activeIndex ? 'border-brand-primary opacity-100 scale-105' : 'border-transparent opacity-50 hover:opacity-80'
                     }`}
                   >
                      {item.type === 'image' ? (
                        <img 
                          src={item.url} 
                          className="w-full h-full object-cover" 
                          alt="miniatura" 
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center text-white">
                          <Play className="w-5 h-5 text-brand-primary fill-current" />
                          <span className="text-[10px] uppercase font-bold mt-0.5">Vídeo</span>
                        </div>
                      )}
                   </button>
                 ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
