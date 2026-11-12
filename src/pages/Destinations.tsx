import { useMemo, useState } from 'react'
import styled from 'styled-components'
import { DestinationCard } from '../components/DestinationCard'
import { QuoteCta } from '../components/QuoteCta'
import { Seo } from '../components/Seo'
import { destinations } from '../data'
import { Container, Display, Eyebrow, Lead, PageHero, Section } from '../styles/primitives'

const Filters=styled.div`display:flex;flex-wrap:wrap;gap:10px;margin-bottom:42px;button{min-height:44px;padding:8px 17px;border:1px solid ${({theme})=>theme.colors.line};border-radius:999px;background:transparent;color:inherit;font-weight:750;}button[aria-pressed="true"]{background:${({theme})=>theme.colors.forest};color:white;border-color:${({theme})=>theme.colors.forest};}`
const Grid=styled.div`display:grid;grid-template-columns:repeat(2,1fr);gap:20px;@media(max-width:720px){grid-template-columns:1fr;}`
export default function Destinations(){const [filter,setFilter]=useState('Todos');const regions=['Todos',...new Set(destinations.map(d=>d.region))];const shown=useMemo(()=>filter==='Todos'?destinations:destinations.filter(d=>d.region===filter),[filter]);return <><Seo title="Destinos" description="Explore ideias de viagens nacionais e internacionais selecionadas pela DestinoVibe."/><PageHero $image="/images/lencois.jpg"><Container><Eyebrow>Um mapa de possibilidades</Eyebrow><Display>Escolha pelo lugar.<br/>Ou pela sensação.</Display><Lead>Cada destino é um ponto de partida. A viagem final nasce da sua época, do seu ritmo e das experiências que importam para você.</Lead></Container></PageHero><Section><Container><Filters aria-label="Filtrar destinos por região">{regions.map(r=><button key={r} aria-pressed={filter===r} onClick={()=>setFilter(r)}>{r}</button>)}</Filters><Grid>{shown.map(d=><DestinationCard key={d.slug} destination={d}/>)}</Grid></Container></Section><QuoteCta/></>}
