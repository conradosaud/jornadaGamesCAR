import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';

// Placeholder de imagens
const SLIDES = [
  'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop'
];

export default function Presentation() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      // Pequeno autoplay opcional
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  return (
    <section className="w-full py-16 px-4 bg-surface-raised flex flex-col items-center border-b border-border">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-display font-extrabold text-brand-primary mb-6">
          Games Senac São Carlos
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
          Linha do Tempo da Jornada de Desenvolvimento de Jogos Digitais no Senac São Carlos. Conheça nossa história.
        </p>
      </div>

      {/* Carrossel de Imagens */}
      <div className="w-full max-w-5xl mx-auto overflow-hidden rounded-xl shadow-lg" ref={emblaRef}>
        <div className="flex">
          {SLIDES.map((src, index) => (
            <div className="flex-[0_0_100%] min-w-0 h-[400px] md:h-[500px]" key={index}>
              <img 
                src={src} 
                alt={`Apresentação ${index + 1}`} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
