import * as Dialog from '@radix-ui/react-dialog'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Shell = styled.header<{ $solid: boolean }>`
  position: fixed; inset: 0 0 auto; z-index: 40; color: ${({ $solid, theme }) => $solid ? theme.colors.ink : 'white'}; background: ${({ $solid }) => $solid ? 'rgba(251,249,244,.92)' : 'linear-gradient(rgba(6,25,23,.55), transparent)'}; border-bottom: 1px solid ${({ $solid }) => $solid ? 'rgba(16,47,43,.09)' : 'transparent'}; backdrop-filter: ${({ $solid }) => $solid ? 'blur(14px)' : 'none'}; transition: .25s;
`
const Inner = styled.div`width: min(${({ theme }) => theme.max}, calc(100% - 40px)); height: 86px; margin: auto; display: flex; align-items: center; justify-content: space-between; gap: 32px;`
const Brand = styled(Link)`display: inline-flex; align-items: center; gap: 10px; color: inherit; font-size: 1.18rem; font-weight: 900; letter-spacing: -.04em; text-decoration: none;`
const Mark = styled.span`width: 27px; aspect-ratio: 1; display: inline-block; border: 7px solid currentColor; border-radius: 50% 50% 50% 4px; transform: rotate(-15deg);`
const Nav = styled.nav`display: flex; align-items: center; gap: 27px; a { color: inherit; font-size: .78rem; font-weight: 750; text-decoration: none; } a.active { text-decoration: underline; text-underline-offset: 6px; } @media(max-width: 980px){display:none;}`
const Quote = styled(Link)`display:inline-flex; align-items:center; gap:8px; border:1px solid currentColor; border-radius:999px; padding:10px 15px; color:inherit; font-size:.76rem; font-weight:800; text-decoration:none;`
const MenuButton = styled.button`display:none; width:48px; height:48px; place-items:center; color:inherit; border:0; background:transparent; @media(max-width:980px){display:grid;}`
const Overlay = styled(Dialog.Overlay)`position:fixed; inset:0; z-index:80; background:rgba(7,25,23,.58); backdrop-filter:blur(5px);`
const Drawer = styled(Dialog.Content)`position:fixed; inset:0 0 0 auto; z-index:81; width:min(88vw,430px); padding:30px; background:${({theme})=>theme.colors.paper}; color:${({theme})=>theme.colors.ink}; display:flex; flex-direction:column; box-shadow:-20px 0 70px rgba(0,0,0,.18);`
const DrawerTop = styled.div`display:flex; align-items:center; justify-content:space-between; margin-bottom:70px;`
const Close = styled(Dialog.Close)`width:48px;height:48px;display:grid;place-items:center;border:1px solid ${({theme})=>theme.colors.line};border-radius:50%;background:transparent;`
const DrawerNav = styled.nav`display:grid; gap:6px; a{padding:10px 0;color:inherit;font-family:${({theme})=>theme.fonts.serif};font-size:2.2rem;line-height:1.1;text-decoration:none;}`

const links = [['Destinos','/destinos'],['Serviços','/servicos'],['Sobre','/sobre'],['Depoimentos','/depoimentos'],['Contato','/contato']]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  useEffect(() => { const onScroll=()=>setScrolled(window.scrollY>30); window.addEventListener('scroll',onScroll,{passive:true}); return ()=>window.removeEventListener('scroll',onScroll) },[])
  const solidPages = ['/privacidade','/orcamento']
  const solid = scrolled || solidPages.includes(location.pathname)
  return <Shell $solid={solid}>
    <Inner>
      <Brand to="/" aria-label="DestinoVibe — início"><Mark/> destino<span>vibe</span></Brand>
      <Nav aria-label="Navegação principal">{links.map(([label,to])=><NavLink key={to} to={to}>{label}</NavLink>)}</Nav>
      <Quote to="/orcamento">Pedir orçamento <ArrowUpRight size={16}/></Quote>
      <Dialog.Root open={open} onOpenChange={setOpen}><Dialog.Trigger asChild><MenuButton aria-label="Abrir menu"><Menu/></MenuButton></Dialog.Trigger><Dialog.Portal><Overlay/><Drawer aria-describedby={undefined}><DrawerTop><Dialog.Title asChild><Brand to="/" onClick={()=>setOpen(false)}><Mark/> destinovibe</Brand></Dialog.Title><Close aria-label="Fechar menu"><X/></Close></DrawerTop><DrawerNav>{links.map(([label,to])=><NavLink key={to} to={to} onClick={()=>setOpen(false)}>{label}</NavLink>)}<NavLink to="/orcamento" onClick={()=>setOpen(false)}>Pedir orçamento ↗</NavLink></DrawerNav></Drawer></Dialog.Portal></Dialog.Root>
    </Inner>
  </Shell>
}
