import { ArrowUpRight, Camera as Instagram, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '../styles/primitives'

const Foot=styled.footer`padding:90px 0 28px;background:${({theme})=>theme.colors.forest};color:white;`
const Grid=styled.div`display:grid;grid-template-columns:1.4fr .6fr .6fr;gap:60px;padding-bottom:70px;border-bottom:1px solid rgba(255,255,255,.16);@media(max-width:760px){grid-template-columns:1fr;}`
const Brand=styled.p`font-family:${({theme})=>theme.fonts.serif};font-size:clamp(3rem,7vw,6.2rem);line-height:.9;letter-spacing:-.05em;margin-bottom:28px;`
const Note=styled.p`max-width:480px;color:rgba(255,255,255,.65);`
const Col=styled.div`display:grid;align-content:start;gap:12px;a{color:inherit;text-decoration:none;} h3{font-size:.73rem;letter-spacing:.14em;text-transform:uppercase;color:${({theme})=>theme.colors.sun};}`
const Bottom=styled.div`display:flex;justify-content:space-between;gap:20px;padding-top:25px;color:rgba(255,255,255,.55);font-size:.75rem;@media(max-width:620px){flex-direction:column;}`

export function Footer(){return <Foot><Container><Grid><div><Brand>Qual é a vibe<br/>da sua próxima viagem?</Brand><Note>Conte o que você imagina. A DestinoVibe organiza as escolhas e transforma a inspiração em um roteiro possível.</Note></div><Col><h3>Explore</h3><Link to="/destinos">Destinos</Link><Link to="/servicos">Serviços</Link><Link to="/sobre">Sobre</Link><Link to="/privacidade">Privacidade</Link></Col><Col><h3>Comece agora</h3><Link to="/orcamento">Pedir orçamento <ArrowUpRight size={15}/></Link><Link to="/contato">Falar com a agência</Link><a href="https://instagram.com/destinovibe" target="_blank" rel="noreferrer"><Instagram size={15}/> Instagram</a><a href="https://wa.me/5514991028340" target="_blank" rel="noreferrer"><MessageCircle size={15}/> WhatsApp</a></Col></Grid><Bottom><span>© {new Date().getFullYear()} DestinoVibe · Agência de viagens online · Jaú, SP</span><span>Fotografias editoriais de inspiração via Unsplash.</span></Bottom></Container></Foot>}
