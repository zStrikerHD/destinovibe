import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const routes = [
  ['destinos', 'Destinos', 'Explore ideias de viagens nacionais e internacionais selecionadas pela DestinoVibe.', 'Escolha pelo lugar. Ou pela sensação.'],
  ['servicos', 'Serviços', 'Viagens nacionais, internacionais, cruzeiros e roteiros sob medida com atendimento próximo.', 'Planejar bem também faz parte da viagem.'],
  ['sobre', 'Sobre', 'Conheça a proposta da DestinoVibe, agência de viagens online sediada em Jaú, São Paulo.', 'Viajar começa com alguém que sabe ouvir.'],
  ['depoimentos', 'Depoimentos', 'A DestinoVibe publica somente avaliações genuínas e verificáveis.', 'Histórias reais, sempre.'],
  ['contato', 'Contato', 'Fale com a DestinoVibe e conte os detalhes da viagem que você imagina.', 'A próxima viagem pode começar agora.'],
  ['privacidade', 'Política de Privacidade', 'Como a DestinoVibe trata os dados informados em seus canais digitais.', 'Política de Privacidade'],
  ['orcamento', 'Pedir orçamento', 'Conte como você imagina a viagem e abra uma conversa estruturada com a DestinoVibe.', 'Comece pelo que você já sabe.'],
  ['destinos/lencois-maranhenses', 'Lençóis Maranhenses', 'Dunas, lagoas sazonais e inspiração para um roteiro personalizado nos Lençóis Maranhenses.', 'Lençóis Maranhenses'],
  ['destinos/paraty', 'Paraty', 'Mar, mata atlântica, centro histórico e inspiração para uma viagem personalizada a Paraty.', 'Paraty'],
  ['destinos/patagonia', 'Patagônia', 'Montanhas, lagos glaciais e inspiração para uma viagem personalizada à Patagônia.', 'Patagônia'],
  ['destinos/santorini', 'Santorini', 'Vilas sobre a caldeira e inspiração para uma viagem personalizada a Santorini.', 'Santorini'],
  ['destinos/japao', 'Japão essencial', 'Cidades, templos, jardins e inspiração para uma viagem personalizada ao Japão.', 'Japão essencial'],
  ['destinos/caribe', 'Caribe sem pressa', 'Praias e inspiração para uma viagem personalizada ao Caribe.', 'Caribe sem pressa'],
]

const index = await readFile('dist/index.html', 'utf8')

for (const [path, title, description, heading] of routes) {
  const directory = join('dist', path)
  await mkdir(directory, { recursive: true })
  const html = index
    .replace(/<title>.*?<\/title>/, `<title>${title} — DestinoVibe</title>`)
    .replace(/<meta name="description" content=".*?"\s*\/?>/, `<meta name="description" content="${description}" />`)
    .replace('<div id="root"></div>', `<div id="root"><main style="padding:4rem;font-family:system-ui"><h1>${heading}</h1><p>${description}</p></main></div>`)
  await writeFile(join(directory, 'index.html'), html)
}

console.log(`Prerendered ${routes.length} public routes.`)
