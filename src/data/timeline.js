/**
 * Dados da timeline — os marcos da jornada do curso.
 * containerTitle: agrupa eventos sob uma mesma seção principal (ex: 'BGS 2022', 'Turma de jogos 3 (2024-2025)')
 */
export const timelineEvents = [
  {
    id: 'bgs-2022-1',
    containerTitle: 'BGS 2022',
    title: 'Visitantes',
    date: 'Outubro de 2022',
    description: 'Visitamos pela primeira vez a feira de jogos da Brasil Game Show e conhecemos o espaço de jogos do Senac',
    media: [
      { type: 'image', url: 'midia/01_1.BGS_2022.webp', alt: '01_1.BGS_2022' },
      { type: 'image', url: 'midia/01_2.BGS.webp', alt: '01_2.BGS' }
    ],
    timestamp: 202210 // Para ordenação
  },
  {
    id: 'bgs-2023-1',
    containerTitle: 'BGS 2023',
    title: 'Entusiastas',
    date: 'Outubro de 2023',
    description: 'Na expectativa de abrir um novo curso de jogos na unidade de São Carlos',
    media: [
      { type: 'image', url: 'midia/01_2.BGS_2023.webp', alt: '01_2.BGS_2023' },
      { type: 'image', url: 'midia/01_3.BGS_2023.webp', alt: '01_3.BGS_2023' }
    ],
    timestamp: 202310
  },
  {
    id: 'turma3-1',
    containerTitle: 'Turma de jogos 3 (2024-2025)',
    title: 'Prototipação de jogos analógicos',
    date: 'Fevereiro de 2024',
    description: 'Alunos criam seus primeiros jogos analógicos e testam com protótipos após as aulas teóricas e práticas',
    media: [
      { type: 'image', url: 'midia/02.1_prototipos.webp', alt: '02.1_prototipos' },
      { type: 'image', url: 'midia/02.2_prototipos.webp', alt: '02.2_prototipos' },
      { type: 'image', url: 'midia/02.3_prototipos.webp', alt: '02.3_prototipos' }
    ],
    timestamp: 202402
  },
  {
    id: 'turma3-2',
    containerTitle: 'Turma de jogos 3 (2024-2025)',
    title: 'Apresentação na SCXP (São Carlos Experience)',
    date: 'Março de 2024',
    description: 'Alunos apresentarão seus protótipos de jogos para o público em geral na São Carlos Experience',
    media: [
      { type: 'image', url: 'midia/03.1_ccxp_prototipos.jpg.mp4.webp', alt: '03.1_CSXP' },
      { type: 'image', url: 'midia/03.2_ccxp_prototipos.jpg.mp4.webp', alt: '03.2_CSXP' }
    ],
    timestamp: 202403
  },
  {
    id: 'turma3-3',
    containerTitle: 'Turma de jogos 3 (2024-2025)',
    title: 'Visita técnica ao DOFF (Diversão Offline)',
    date: 'Junho de 2024',
    description: 'Alunos visitaram a maior feira de jogos analógicos da américa latina, o Diversão Offline!',
    media: [
      { type: 'image', url: 'midia/04_DOFF.webp', alt: '04_DOFF' }
    ],
    timestamp: 202406
  }
];
