# Timeline

A linha do tempo deve ser montada da seguinte maneira:
- Um linha vertical central que percorre a página toda do começo ao fim
- De forma alternada em cada lado dessa linha, vão aparecer uma data com um título e uma breve descrição com uma mídia
- Uma animação de montagem da mídia e do texto deve ocorrer conforme o usuário desce e os blocos são revelados. Deixe a imaginação fluir, mas ela precise ser rápida e leve.
- A ordem da linha do tempo deve ser do presente para o passado.

## Controles da Timeline
Crie um controle que permita o usuário navegar mais rapidamente pela linha do tempo sem precisar rolar tudo. Também é bom ter configurações que permite alterar a visualização geral da linha do tempo.

### Navegação
Pontos de navegação para:
- Turma 3 (2024 - 2025)
- Turma 4 (2025 - 2026)
- BGS
- Eventos

### Configurações
Configurações geral de exibição:
- Ordem decrescente ou crescente da timeline
- Remover a linha do tempo e exibir em forma de mosaico apenas as imagens e os vídeos

## Mídias
As mídias devem ser responsivas, ou seja, devem se adaptar a diferentes tamanhos de tela.
- **Imagens**: estão em public/midia em formato diversos
-- Inicialmente deve começar com src="#" para que eu possa substituir depois
-- Use lazy load
- **Vídeos**: estão em public/midia em formato de texto contendo o link de hospedagem do Youtube. Deixe o Embed do Youtube preparado com src="#" para eu substituir depois.

### Interação com as mídias
Ao clicar em uma mídia, seja imagem ou vídeo, a mídia deve ser exibida de forma parecida com o Instagram, sendo:
- Desktop: mídia ampliada ao lado esquerdo central, o título e a descrição ao lado direito
- Mobile: mídia ampliada em tela cheia, o título e a descrição em baixo

## Formatação
O conteúdo da linha do tempo é separado em:
- Container: engloba todo o conteúdo (título, descrição e mídias)
- Título: texto que representa um acontecimento, um momento, etc
- Descrição: breve descrição do acontecimento
- Mídia: imagem ou vídeo que representa o evento
-- Podem haver mais de uma mídia para um mesmo acontecimento. Organize elas de forma inteligente, como uma galeria de fotos.

## Linha do tempo

- Container: BGS 2022
    - Título: Visitantes
        - Data: outubro de 2022
        - Descrição: Visitamos pela primeira vez a feira de jogos da Brasil Game Show e conhecemos o espaço de jogos do Senac
        - Mídia: 01_1.BGS_2022, 01_2.BGS

- Container: BGS 2023
    - Título: Entusiastas
        - Data: outubro de 2023
        - Descrição: Na espectativa de abrir um novo curso de jogos na unidade de São Carlos
        - Mídia: 01_2.BGS_2023, 01_3.BGS_2023

- Container: Turma de jogos 3 (2024-2025)

    - Título: Prototipação de jogos analógicos
        - Data: fevereiro de 2024
        - Descrição: Alunos criam seus primeiros jogos analógicos e testam com protótipos após as aulas teóricas e práticas
        - Mídia: 02.1_prototipos, 02.2_prototipos, 02.3_prototipos

    - Título: Apresentação na CSXP (São Carlos Experience)
        - Data: março de 2024
        - Descrição: Alunos apresentarão seus protótipos de jogos para o público em geral na São Carlos Experience
        - Mídia: 03.1_CSXP, 03.2_CSXP

    - Título: Visita técnica ao DOFF (Diversão Offline)
        - Data: junho de 2024
        - Descrição: Alunos visitaram a maior feira de jogos analógicos da américa latina, o Diversão Offline!
        - Mídia: 04_DOFF