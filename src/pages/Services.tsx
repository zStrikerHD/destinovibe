import { Anchor, Globe2, Map, Ship } from 'lucide-react'
import styled from 'styled-components'
import { QuoteCta } from '../components/QuoteCta'
import { Seo } from '../components/Seo'
import { services } from '../data'
import { Container, Display, Eyebrow, H2, Lead, PageHero, Section } from '../styles/primitives'

const icons=[Map,Globe2,Ship,Anchor]
const List=styled.div`display:grid;gap:0;border-top:1px solid ${({theme})=>theme.colors.line};`
const Item=styled.article`display:grid;grid-template-columns:80px .8fr 1.2fr;gap:36px;padding:48px 0;border-bottom:1px solid ${({theme})=>theme.colors.line};.icon{width:58px;height:58px;display:grid;place-items:center;border-radius:50%;background:${({theme})=>theme.colors.sea};}h2{font-family:${({theme})=>theme.fonts.serif};font-size:clamp(2rem,4vw,4rem);font-weight:400;line-height:1;margin:0;}p{max-width:640px;color:${({theme})=>theme.colors.muted};font-size:1.05rem;}@media(max-width:720px){grid-template-columns:60px 1fr;p{grid-column:2;}}`
export default function Services(){return <><Seo title="Serviços" description="Viagens nacionais, internacionais, cruzeiros e roteiros sob medida com atendimento próximo."/><PageHero $image="/images/nature.jpg"><Container><Eyebrow>Curadoria de ponta a ponta</Eyebrow><Display>Planejar bem também faz parte da viagem.</Display><Lead>Uma conversa atenta para organizar possibilidades, reduzir ruído e criar um roteiro coerente com você.</Lead></Container></PageHero><Section><Container><Eyebrow>Como podemos ajudar</Eyebrow><H2>Quatro caminhos.<br/>Um jeito pessoal de cuidar.</H2><List>{services.map((s,i)=>{const Icon=icons[i];return <Item key={s.id}><div className="icon"><Icon/></div><h2>{s.title}</h2><div><p>{s.text}</p><p>O escopo final, fornecedores, valores e disponibilidade são apresentados durante o atendimento, de acordo com cada pedido.</p></div></Item>})}</List></Container></Section><QuoteCta/></>}
