import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; background: ${({ theme }) => theme.colors.paper}; }
  body { margin: 0; color: ${({ theme }) => theme.colors.ink}; background: ${({ theme }) => theme.colors.paper}; font-family: ${({ theme }) => theme.fonts.sans}; line-height: 1.6; -webkit-font-smoothing: antialiased; }
  body, button, input, select, textarea { font: inherit; }
  img { display: block; max-width: 100%; }
  a { color: inherit; }
  button, a { -webkit-tap-highlight-color: transparent; }
  button { cursor: pointer; }
  :focus-visible { outline: 3px solid ${({ theme }) => theme.colors.sun}; outline-offset: 4px; }
  ::selection { background: ${({ theme }) => theme.colors.sea}; color: ${({ theme }) => theme.colors.forest}; }
  h1, h2, h3, p { margin-top: 0; }
  h1, h2, h3 { text-wrap: balance; }
  p { text-wrap: pretty; }
  .skip-link { position: fixed; top: 10px; left: 10px; z-index: 9999; transform: translateY(-180%); background: #fff; color: #102f2b; padding: 12px 18px; border-radius: 8px; }
  .skip-link:focus { transform: none; }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; scroll-behavior: auto !important; }
  }
`
