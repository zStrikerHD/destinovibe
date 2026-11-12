import { MessageCircle } from 'lucide-react'
import styled from 'styled-components'
import { QuoteCta } from '../components/QuoteCta'
import { Seo } from '../components/Seo'
import { ButtonLink, Container, Display, Eyebrow, H2, Lead, PageHero, Section } from '../styles/primitives'

const Empty=styled.div`max-width:850px;padding:clamp(30px,7vw,72px);border:1px solid ${({theme})=>theme.colors.line};background:white;.icon{width:64px;height:64px;display:grid;place-items:center;border-radius:50%;background:${({theme})=>theme.colors.sea};margin-bottom:32px;}p{max-width:680px;color:${({theme})=>theme.colors.muted};}`
export default function Testimonials(){return <><Seo title="Depoimentos" description="A política da DestinoVibe para avaliações: publicar apenas relatos genuínos e verificáveis."/><PageHero $image="/images/travelers.jpg"><Container><Eyebrow>Histórias reais, sempre</Eyebrow><Display>Confiança não precisa de aspas inventadas.</Display><Lead>Este espaço receberá avaliações de clientes somente depois de uma verificação e autorização de publicação.</Lead></Container></PageHero><Section $tone="sand"><Container><Empty><div className="icon"><MessageCircle/></div><Eyebrow>Em preparação</Eyebrow><H2>Sem depoimentos genéricos por aqui.</H2><p>Preferimos não preencher esta página com frases de exemplo. Quando houver avaliações verificáveis e autorização dos autores, elas serão publicadas com contexto e origem.</p><ButtonLink to="/contato">Falar com a DestinoVibe</ButtonLink></Empty></Container></Section><QuoteCta/></>}
