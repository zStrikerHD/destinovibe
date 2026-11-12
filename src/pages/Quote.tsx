import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { QuoteForm } from '../components/QuoteForm'
import { Seo } from '../components/Seo'
import { Container, Eyebrow, Lead, Section } from '../styles/primitives'
const Head=styled.div`max-width:840px;margin:70px auto 70px;text-align:center;h1{font-family:${({theme})=>theme.fonts.serif};font-size:clamp(3.5rem,8vw,7.5rem);font-weight:400;line-height:.9;letter-spacing:-.055em;margin-bottom:25px;}p{margin:auto;}`
export default function Quote(){const [params]=useSearchParams();return <><Seo title="Pedir orçamento" description="Conte como você imagina a viagem e abra uma conversa estruturada com a DestinoVibe no WhatsApp."/><Section $tone="sand"><Container><Head><Eyebrow>Sua viagem, passo a passo</Eyebrow><h1>Comece pelo que você já sabe.</h1><Lead>Não precisa ter tudo decidido. Leva poucos minutos e nenhuma mensagem é enviada sem sua confirmação.</Lead></Head><QuoteForm defaultDestination={params.get('destino')??''}/></Container></Section></>}
