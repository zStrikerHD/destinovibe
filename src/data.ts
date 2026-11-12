import type { Destination } from './types'

const localImages: Record<string, string> = {
  'photo-1559827291-72ee739d0d9a': 'lencois.jpg',
  'photo-1500530855697-b586d89ba3ee': 'nature.jpg',
  'photo-1470770841072-f978cf4d019e': 'lencois.jpg',
  'photo-1483729558449-99ef09a8c325': 'paraty.jpg',
  'photo-1507525428034-b723cf961d3e': 'hero-beach.jpg',
  'photo-1441974231531-c6227db76b6e': 'forest.jpg',
  'photo-1464822759023-fed622ff2c3b': 'patagonia.jpg',
  'photo-1464278533981-50106e6176b1': 'patagonia.jpg',
  'photo-1500534623283-312aade485b7': 'nature.jpg',
  'photo-1596933144889-c15043a9ddde': 'santorini.jpg',
  'photo-1575940499359-13c5ff60a5f3': 'santorini.jpg',
  'photo-1670613873332-ca447d72ef40': 'santorini.jpg',
  'photo-1528360983277-13d401cdc186': 'japan.jpg',
  'photo-1540959733332-eab4deabeeaf': 'japan-city.jpg',
  'photo-1493976040374-85c8e12f0c0e': 'japan-temple.jpg',
  'photo-1510414842594-a61c69b5ae57': 'caribbean.jpg',
  'photo-1499793983690-e29da59ef1c2': 'caribbean.jpg',
}
const img = (id: string) => `/images/${localImages[id] ?? 'nature.jpg'}`

export const destinations: Destination[] = [
  {
    slug: 'lencois-maranhenses', name: 'Lençóis Maranhenses', country: 'Brasil', region: 'Nordeste', eyebrow: 'Entre dunas e lagoas',
    description: 'Um horizonte que muda com a luz — e uma travessia feita no seu ritmo.',
    longDescription: 'Dunas de areia clara, lagoas sazonais e vilarejos que convidam a desacelerar. Este roteiro de inspiração combina paisagem, tempo livre e deslocamentos pensados com cuidado.',
    idealFor: ['Natureza', 'Casais', 'Fotografia'], bestTime: 'Em geral, de junho a setembro', duration: 'Sugestão: 5 a 8 dias',
    image: img('photo-1559827291-72ee739d0d9a'), gallery: [img('photo-1559827291-72ee739d0d9a'), img('photo-1500530855697-b586d89ba3ee'), img('photo-1470770841072-f978cf4d019e')],
    credit: { label: 'Fotos de inspiração no Unsplash', href: 'https://unsplash.com/' },
  },
  {
    slug: 'paraty', name: 'Paraty', country: 'Brasil', region: 'Sudeste', eyebrow: 'Mar, mata e história',
    description: 'Dias de barco, noites no centro histórico e tempo para saborear a viagem.',
    longDescription: 'Entre a Serra do Mar e a baía da Ilha Grande, Paraty reúne patrimônio, cozinha, mata atlântica e ilhas. A composição ideal depende do seu ritmo e da época escolhida.',
    idealFor: ['Cultura', 'Gastronomia', 'Praia'], bestTime: 'O ano todo, com perfis diferentes', duration: 'Sugestão: 4 a 6 dias',
    image: img('photo-1483729558449-99ef09a8c325'), gallery: [img('photo-1483729558449-99ef09a8c325'), img('photo-1507525428034-b723cf961d3e'), img('photo-1441974231531-c6227db76b6e')],
    credit: { label: 'Fotos de inspiração no Unsplash', href: 'https://unsplash.com/' },
  },
  {
    slug: 'patagonia', name: 'Patagônia', country: 'Argentina & Chile', region: 'América do Sul', eyebrow: 'Silêncio em escala monumental',
    description: 'Montanhas, lagos glaciais e escolhas de roteiro que respeitam seu fôlego.',
    longDescription: 'Uma viagem de contrastes e grandes distâncias. A curadoria pode priorizar trilhas, contemplação, navegação ou uma combinação confortável entre experiências.',
    idealFor: ['Aventura', 'Natureza', 'Road trip'], bestTime: 'Em geral, de outubro a abril', duration: 'Sugestão: 8 a 14 dias',
    image: img('photo-1464822759023-fed622ff2c3b'), gallery: [img('photo-1464822759023-fed622ff2c3b'), img('photo-1464278533981-50106e6176b1'), img('photo-1500534623283-312aade485b7')],
    credit: { label: 'Fotos de inspiração no Unsplash', href: 'https://unsplash.com/' },
  },
  {
    slug: 'santorini', name: 'Santorini', country: 'Grécia', region: 'Europa', eyebrow: 'Egeu em azul e branco',
    description: 'Vilas sobre a caldeira, ritmo mediterrâneo e pores do sol memoráveis.',
    longDescription: 'Santorini pode ser pausa, romance ou ponto de partida para outras ilhas. Um bom roteiro equilibra os lugares desejados com momentos longe dos horários mais concorridos.',
    idealFor: ['Romance', 'Gastronomia', 'Ilhas'], bestTime: 'Primavera e início do outono', duration: 'Sugestão: 4 a 7 dias',
    image: img('photo-1596933144889-c15043a9ddde'), gallery: [img('photo-1596933144889-c15043a9ddde'), img('photo-1575940499359-13c5ff60a5f3'), img('photo-1670613873332-ca447d72ef40')],
    credit: { label: 'Alberto Lora e colaboradores / Unsplash', href: 'https://unsplash.com/photos/white-and-blue-dome-building-near-body-of-water-during-daytime-xEG9zTZ8kog' },
  },
  {
    slug: 'japao', name: 'Japão essencial', country: 'Japão', region: 'Ásia', eyebrow: 'Tradição em movimento',
    description: 'Cidades vibrantes, rituais cotidianos e pausas entre templos e jardins.',
    longDescription: 'Um primeiro Japão pede edição: menos trocas, mais presença. Tóquio, Kyoto e extensões ganham outra textura quando o roteiro considera estações, deslocamentos e interesses pessoais.',
    idealFor: ['Cultura', 'Gastronomia', 'Arquitetura'], bestTime: 'Depende da experiência desejada', duration: 'Sugestão: 10 a 16 dias',
    image: img('photo-1528360983277-13d401cdc186'), gallery: [img('photo-1528360983277-13d401cdc186'), img('photo-1540959733332-eab4deabeeaf'), img('photo-1493976040374-85c8e12f0c0e')],
    credit: { label: 'Fotos de inspiração no Unsplash', href: 'https://unsplash.com/' },
  },
  {
    slug: 'caribe', name: 'Caribe sem pressa', country: 'Caribe', region: 'Américas', eyebrow: 'Água morna, agenda leve',
    description: 'Uma pausa de verdade, escolhida pelo estilo de praia que combina com você.',
    longDescription: 'O Caribe não é um destino único. Perfil da ilha, conexões, época e estilo de hospedagem mudam a experiência — a curadoria começa por essas escolhas.',
    idealFor: ['Praia', 'Descanso', 'Família'], bestTime: 'Varia por ilha e temporada', duration: 'Sugestão: 6 a 9 dias',
    image: img('photo-1507525428034-b723cf961d3e'), gallery: [img('photo-1507525428034-b723cf961d3e'), img('photo-1510414842594-a61c69b5ae57'), img('photo-1499793983690-e29da59ef1c2')],
    credit: { label: 'Fotos de inspiração no Unsplash', href: 'https://unsplash.com/' },
  },
]

export const services = [
  { id: 'brasil', number: '01', title: 'Brasil por inteiro', text: 'Praias, serras, cidades históricas e refúgios de natureza com logística desenhada para o seu tempo.' },
  { id: 'mundo', number: '02', title: 'Mundo sem complicação', text: 'Roteiros internacionais que organizam conexões, ritmo e prioridades sem apagar a espontaneidade.' },
  { id: 'cruzeiros', number: '03', title: 'Cruzeiros com contexto', text: 'Escolha de navio, cabine, rota e experiências em terra alinhadas ao jeito que você gosta de viajar.' },
  { id: 'sob-medida', number: '04', title: 'Roteiros sob medida', text: 'Uma curadoria pessoal para viagens com múltiplas cidades, ocasiões especiais ou interesses específicos.' },
]
