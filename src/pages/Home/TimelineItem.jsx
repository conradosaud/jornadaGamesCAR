import { motion } from 'framer-motion';

export default function TimelineItem({ event, isLeft, onMediaClick }) {
  return (
    <div className={`relative flex items-center justify-between md:justify-normal group is-active w-full my-12 ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      
      {/* Marcador Central (Bolinha na Linha do Tempo) */}
      <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-brand-primary border-4 border-surface absolute left-1/2 transform -translate-x-1/2 z-10 shadow-md group-hover:scale-125 transition-transform duration-300">
      </div>

      {/* Conteúdo */}
      <motion.div 
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className={`w-full md:w-[45%] ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} pl-8 md:pl-0`}
      >
        <span className="text-sm font-bold text-brand-secondary mb-1 block">
          {event.date}
        </span>
        <h3 className="text-2xl font-display font-bold text-text-primary mb-3">
          {event.title}
        </h3>
        <p className="text-text-secondary leading-relaxed mb-6">
          {event.description}
        </p>

        {/* Galeria de Mídias (Imagens Protagonistas) */}
        <div className={`mt-4 w-full max-w-lg ${isLeft ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'} ml-0`}>
          {event.media.length === 1 && (
            <div 
              className="relative rounded-xl overflow-hidden cursor-pointer hover:opacity-95 transition-all duration-300 ring-2 ring-transparent hover:ring-brand-primary shadow-lg aspect-[16/10] w-full"
              onClick={() => onMediaClick(event, 0)}
            >
              <img 
                src={event.media[0].url} 
                alt={event.media[0].alt} 
                loading="lazy" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" 
              />
            </div>
          )}

          {event.media.length === 2 && (
            <div className="grid grid-cols-2 gap-3 w-full">
              {event.media.map((item, index) => (
                <div 
                  key={index}
                  className="relative rounded-xl overflow-hidden cursor-pointer hover:opacity-95 transition-all duration-300 ring-2 ring-transparent hover:ring-brand-primary shadow-lg aspect-[4/3] w-full"
                  onClick={() => onMediaClick(event, index)}
                >
                  <img 
                    src={item.url} 
                    alt={item.alt} 
                    loading="lazy" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              ))}
            </div>
          )}

          {event.media.length >= 3 && (
            <div className="grid grid-cols-6 gap-3 w-full">
              <div 
                className="col-span-6 relative rounded-xl overflow-hidden cursor-pointer hover:opacity-95 transition-all duration-300 ring-2 ring-transparent hover:ring-brand-primary shadow-lg aspect-[16/10] w-full"
                onClick={() => onMediaClick(event, 0)}
              >
                <img 
                  src={event.media[0].url} 
                  alt={event.media[0].alt} 
                  loading="lazy" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" 
                />
              </div>
              {event.media.slice(1).map((item, index) => {
                const remainingCount = event.media.length - 1;
                const colSpan = remainingCount === 2 ? 'col-span-3' : 'col-span-2';
                return (
                  <div 
                    key={index}
                    className={`${colSpan} relative rounded-xl overflow-hidden cursor-pointer hover:opacity-95 transition-all duration-300 ring-2 ring-transparent hover:ring-brand-primary shadow-lg aspect-[4/3] w-full`}
                    onClick={() => onMediaClick(event, index + 1)}
                  >
                    <img 
                      src={item.url} 
                      alt={item.alt} 
                      loading="lazy" 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
