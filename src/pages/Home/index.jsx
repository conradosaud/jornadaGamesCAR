import Presentation from './Presentation';
import Timeline from './Timeline';

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* Seção 1: Apresentação (Header + Carrossel) */}
      <Presentation />

      {/* Seção 2: Linha do tempo e Controles */}
      <Timeline />
    </div>
  );
}
