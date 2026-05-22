import { useState, useMemo } from 'react';
import TimelineControls from './TimelineControls';
import TimelineItem from './TimelineItem';
import MediaModal from './MediaModal';
import { timelineEvents } from '../../data/timeline';

export default function Timeline() {
  const [isAscending, setIsAscending] = useState(false); // Falso = Decrescente (Mais recente primeiro)
  const [isMosaic, setIsMosaic] = useState(false);
  const [modalData, setModalData] = useState(null); // { event, index }

  // Ordenar e Agrupar Eventos
  const sortedEvents = useMemo(() => {
    const sorted = [...timelineEvents].sort((a, b) => {
      return isAscending ? a.timestamp - b.timestamp : b.timestamp - a.timestamp;
    });

    // Agrupa por containerTitle
    const grouped = [];
    let currentGroup = null;

    sorted.forEach((event) => {
      if (!currentGroup || currentGroup.title !== event.containerTitle) {
        currentGroup = {
          title: event.containerTitle,
          events: []
        };
        grouped.push(currentGroup);
      }
      currentGroup.events.push(event);
    });

    return grouped;
  }, [isAscending]);

  const handleMediaClick = (event, index) => {
    setModalData({ event, index });
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <section className="w-full bg-surface py-12 relative min-h-screen">
      
      {/* Controles de navegação e exibição */}
      <TimelineControls 
        isAscending={isAscending}
        setIsAscending={setIsAscending}
        isMosaic={isMosaic}
        setIsMosaic={setIsMosaic}
      />

      {/* Visão de Mosaico */}
      {isMosaic && (
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {sortedEvents.map(group => 
              group.events.map(event => 
                event.media.map((mediaItem, idx) => (
                  <div 
                    key={`${event.id}-${idx}`} 
                    className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity ring-2 ring-transparent hover:ring-brand-primary"
                    onClick={() => handleMediaClick(event, idx)}
                  >
                    <img 
                      src={mediaItem.url} 
                      alt={mediaItem.alt} 
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))
              )
            )}
          </div>
        </div>
      )}

      {/* Visão Linha do Tempo */}
      {!isMosaic && (
        <div className="max-w-6xl mx-auto px-4 py-12 relative">
          
          {/* Linha vertical centralizada */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-border transform -translate-x-1/2 rounded-full"></div>

          {(() => {
            let globalEventIndex = 0;
            return sortedEvents.map((group, groupIndex) => (
              <div key={groupIndex} className="mb-20">
                
                {/* Título do Container/Agrupador com âncora */}
                <div 
                  id={group.title}
                  className="relative z-10 flex justify-center mb-12 scroll-mt-24"
                >
                  <div className="bg-surface-raised px-6 py-3 rounded-full border-2 border-brand-secondary shadow-sm">
                    <h2 className="text-xl md:text-2xl font-display font-bold text-brand-secondary">
                      {group.title}
                    </h2>
                  </div>
                </div>

                {/* Lista de eventos do grupo */}
                <div className="flex flex-col relative w-full">
                  {group.events.map((event) => {
                    const isLeft = globalEventIndex % 2 === 0;
                    globalEventIndex++;

                    return (
                      <TimelineItem 
                        key={event.id}
                        event={event}
                        isLeft={isLeft}
                        onMediaClick={handleMediaClick}
                      />
                    );
                  })}
                </div>
              </div>
            ));
          })()}

        </div>
      )}

      {/* Modal de Mídia */}
      {modalData && (
        <MediaModal 
          event={modalData.event} 
          initialMediaIndex={modalData.index} 
          onClose={closeModal} 
        />
      )}

    </section>
  );
}
