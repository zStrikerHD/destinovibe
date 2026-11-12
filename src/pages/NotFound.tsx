import { ArrowLeft } from 'lucide-react'
import styled from 'styled-components'
import { Seo } from '../components/Seo'
import { ButtonLink, Container } from '../styles/primitives'
const Wrap=styled.div`min-height:78vh;display:grid;place-items:center;padding:160px 0 90px;background:${({theme})=>theme.colors.forest};color:white;text-align:center;span{color:${({theme})=>theme.colors.sun};font-weight:800;letter-spacing:.2em;}h1{margin:10px 0;font-family:${({theme})=>theme.fonts.serif};font-size:clamp(5rem,16vw,14rem);font-weight:400;line-height:.8;}p{max-width:480px;margin:25px auto;color:rgba(255,255,255,.7);}`
export default function NotFound(){return <><Seo title="Página não encontrada" description="O caminho que você tentou acessar não foi encontrado."/><Wrap><Container><span>ROTA FORA DO MAPA</span><h1>404</h1><p>Essa página não está no roteiro. Volte ao início e continue explorando.</p><ButtonLink to="/"><ArrowLeft size={17}/> Voltar ao início</ButtonLink></Container></Wrap></>}
