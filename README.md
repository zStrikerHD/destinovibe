# DestinoVibe

Website premium da agência DestinoVibe, construído com React, TypeScript, Vite, React Router 7 e styled-components.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Verificação

```bash
npm run lint
npm test
npm run build
npx playwright install chromium
npm run test:e2e
```

## Deploy

### Vercel

1. Abra https://vercel.com/new e importe `zStrikerHD/destinovibe`.
2. Use a raiz do repositório (`./`) e a branch de produção `main`.
3. Clique em **Deploy**. O `vercel.json` define Vite, instalação com `npm ci`, build com `npm run build` e saída `dist/`. O `package.json` seleciona Node.js 22.x.

Não são necessárias variáveis de ambiente para o funcionamento atual. Depois de conectar o GitHub, novos pushes em `main` geram deployments pela integração da Vercel.

As páginas HTML geradas e os arquivos estáticos são servidos primeiro; o fallback para `index.html` permite abrir e atualizar rotas do React Router diretamente. A configuração segue a [documentação oficial de Vite na Vercel](https://vercel.com/docs/frameworks/frontend/vite).

O domínio oficial pode ser conectado em **Settings → Domains** depois que o deployment estiver validado. Sitemap e Open Graph atualmente usam `destinovibe.com.br`.

O build estático é gerado em `dist/`. Configure o host para redirecionar rotas desconhecidas a `index.html` (fallback de SPA). Antes da publicação, confirme telefone, e-mail, CNPJ, Cadastur, política de privacidade e as URLs sociais com a operação da DestinoVibe.

## Integridade de conteúdo

As imagens são referências editoriais do Unsplash, não viagens de clientes. Preços, disponibilidade e avaliações não foram inventados. A abertura do WhatsApp não é tratada como envio confirmado.
