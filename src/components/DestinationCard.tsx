import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import type { Destination } from '../types'

const Card=styled.article`position:relative;min-height:560px;overflow:hidden;border-radius:2px;color:white;background:#173c37;isolation:isolate;&:hover img{transform:scale(1.035)}@media(max-width:640px){min-height:480px;}`
const Img=styled.img`position:absolute;inset:0;z-index:-2;width:100%;height:100%;object-fit:cover;transition:transform .7s cubic-bezier(.2,.8,.2,1);`
const Fade=styled.div`position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,rgba(0,0,0,.04) 30%,rgba(7,25,23,.82));`
const Content=styled.div`position:absolute;inset:auto 0 0;padding:32px;h3{margin:0;font-family:${({theme})=>theme.fonts.serif};font-size:2.45rem;font-weight:400;letter-spacing:-.035em;line-height:1;}p{margin:10px 0 22px;color:rgba(255,255,255,.75);}.meta{font-size:.7rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:${({theme})=>theme.colors.sun};}a{display:inline-flex;align-items:center;gap:8px;color:white;font-weight:800;text-decoration:none;}`

export function DestinationCard({destination}: {destination: Destination}){return <Card><Img src={destination.image} alt={`Paisagem de inspiração para ${destination.name}`} loading="lazy" width="800" height="1100"/><Fade/><Content><span className="meta">{destination.country} · {destination.region}</span><h3>{destination.name}</h3><p>{destination.description}</p><Link to={`/destinos/${destination.slug}`} aria-label={`Conhecer ${destination.name}`}>Conhecer destino <ArrowUpRight size={17}/></Link></Content></Card>}
