import { ArrowUpRight } from 'lucide-react'
import styled from 'styled-components'
import { ButtonLink, Container } from '../styles/primitives'

const Wrap=styled.section`padding:clamp(80px,12vw,150px) 0;background:${({theme})=>theme.colors.sun};color:${({theme})=>theme.colors.forest};`
const Grid=styled.div`display:grid;grid-template-columns:1.5fr .5fr;align-items:end;gap:40px;@media(max-width:760px){grid-template-columns:1fr;}h2{max-width:900px;margin:0;font-family:${({theme})=>theme.fonts.serif};font-size:clamp(3rem,7vw,7rem);font-weight:400;line-height:.91;letter-spacing:-.055em;}p{max-width:480px;margin:22px 0 0;font-size:1.08rem;}`
const DarkButton=styled(ButtonLink)`justify-self:end;background:${({theme})=>theme.colors.forest};color:white;@media(max-width:760px){justify-self:start;}`
export function QuoteCta(){return <Wrap><Container><Grid><div><h2>Vamos desenhar a sua próxima história?</h2><p>Leva poucos minutos. Você conta o essencial e a conversa continua no WhatsApp.</p></div><DarkButton to="/orcamento">Começar orçamento <ArrowUpRight size={18}/></DarkButton></Grid></Container></Wrap>}
