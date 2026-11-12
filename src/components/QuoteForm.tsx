import * as Progress from '@radix-ui/react-progress'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, ArrowRight, Check, ExternalLink } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { z } from 'zod'
import styled from 'styled-components'
import { toast } from 'sonner'
import { Button } from '../styles/primitives'

const quoteSchema=z.object({
  destination:z.string().min(2,'Conte para onde você pensa em viajar.'),
  departureDate:z.string().min(1,'Escolha uma data aproximada.'),
  returnDate:z.string().min(1,'Escolha a data de volta.'),
  adults:z.number().int().min(1,'Informe ao menos um adulto.').max(30),
  children:z.number().int().min(0).max(20),
  budget:z.string().min(1,'Selecione uma faixa de orçamento.'),
  preferences:z.array(z.string()).min(1,'Escolha ao menos uma preferência.'),
  notes:z.string().max(500).optional(),
  name:z.string().min(2,'Digite seu nome.'),
  email:z.string().email('Digite um e-mail válido.'),
  phone:z.string().min(10,'Digite um telefone com DDD.'),
  consent:z.boolean().refine(Boolean,'É preciso autorizar o contato para continuar.'),
}).refine(d=>!d.departureDate||!d.returnDate||new Date(d.returnDate)>=new Date(d.departureDate),{message:'A volta precisa ser depois da ida.',path:['returnDate']})
type FormData=z.infer<typeof quoteSchema>

const steps=[
  {title:'Para onde vamos?',fields:['destination'] as const},
  {title:'Quando você quer ir?',fields:['departureDate','returnDate'] as const},
  {title:'Quem vai viajar?',fields:['adults','children'] as const},
  {title:'Qual investimento imagina?',fields:['budget'] as const},
  {title:'O que combina com você?',fields:['preferences','notes'] as const},
  {title:'Como falamos com você?',fields:['name','email','phone','consent'] as const},
]
const Frame=styled.div`max-width:900px;margin:auto;`
const Bar=styled(Progress.Root)`position:relative;height:4px;overflow:hidden;background:${({theme})=>theme.colors.line};margin-bottom:54px;`
const Indicator=styled(Progress.Indicator)`width:100%;height:100%;background:${({theme})=>theme.colors.coral};transition:transform .35s;`
const StepMeta=styled.div`display:flex;justify-content:space-between;gap:20px;margin-bottom:12px;color:${({theme})=>theme.colors.muted};font-size:.75rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;`
const Title=styled.h2`font-family:${({theme})=>theme.fonts.serif};font-size:clamp(2.5rem,6vw,5.5rem);font-weight:400;letter-spacing:-.045em;line-height:.95;margin-bottom:48px;`
const Panel=styled(motion.div)`min-height:330px;`
const Field=styled.div`display:grid;gap:9px;margin-bottom:24px;label,legend{font-weight:800;font-size:.83rem;}input,textarea,select{width:100%;min-height:56px;padding:13px 16px;border:1px solid ${({theme})=>theme.colors.line};border-radius:12px;background:white;color:${({theme})=>theme.colors.ink};}textarea{min-height:120px;resize:vertical;}small{color:#a33d31;font-weight:700;}`
const Row=styled.div`display:grid;grid-template-columns:1fr 1fr;gap:18px;@media(max-width:620px){grid-template-columns:1fr;}`
const Choices=styled.div`display:grid;grid-template-columns:repeat(3,1fr);gap:12px;@media(max-width:680px){grid-template-columns:1fr 1fr;}`
const Choice=styled.label<{ $selected?: boolean }>`position:relative;min-height:68px;display:flex;align-items:center;justify-content:center;padding:12px;border:1px solid ${({$selected,theme})=>$selected?theme.colors.forest:theme.colors.line};border-radius:12px;background:${({$selected,theme})=>$selected?theme.colors.forest:'white'};color:${({$selected})=>$selected?'white':'inherit'};font-weight:750;text-align:center;cursor:pointer;input{position:absolute;opacity:0;}`
const Actions=styled.div`display:flex;justify-content:space-between;gap:16px;margin-top:34px;button:first-child{background:transparent;border-color:${({theme})=>theme.colors.line};}`
const CheckLine=styled.label`display:flex;align-items:flex-start;gap:12px;font-size:.88rem;input{width:20px;height:20px;margin-top:2px;}`
const Done=styled.div`padding:42px;border:1px solid ${({theme})=>theme.colors.line};background:white;h2{font-family:${({theme})=>theme.fonts.serif};font-size:3.4rem;font-weight:400;line-height:1;}p{color:${({theme})=>theme.colors.muted};}`

const prefs=['Praia e descanso','Natureza e aventura','Cultura e história','Gastronomia','Romance','Viagem em família']
const budgets=['Até R$ 5 mil','R$ 5–10 mil','R$ 10–20 mil','R$ 20–40 mil','Acima de R$ 40 mil','Quero orientação']
const track=(name:string,detail?:Record<string,unknown>)=>window.dispatchEvent(new CustomEvent('destinovibe:conversion',{detail:{name,...detail}}))

export function QuoteForm({defaultDestination=''}:{defaultDestination?:string}){
  const [step,setStep]=useState(0); const [opened,setOpened]=useState(false)
  const {register,handleSubmit,trigger,control,formState:{errors}}=useForm<FormData>({resolver:zodResolver(quoteSchema),mode:'onTouched',defaultValues:{destination:defaultDestination,adults:2,children:0,preferences:[],consent:false}})
  const values=useWatch({control}); const current=steps[step]
  const next=async()=>{if(!opened){track('quote_started');setOpened(true)}; if(await trigger([...current.fields])){track('quote_step_completed',{step:step+1});setStep(s=>Math.min(s+1,steps.length-1))}}
  const onSubmit=(data:FormData)=>{
    const message=[`Olá, DestinoVibe! Meu nome é ${data.name} e gostaria de planejar uma viagem.`,``,`Destino: ${data.destination}`,`Datas: ${data.departureDate} a ${data.returnDate}`,`Viajantes: ${data.adults} adulto(s) e ${data.children} criança(s)`,`Orçamento aproximado: ${data.budget}`,`Preferências: ${data.preferences.join(', ')}`,data.notes?`Observações: ${data.notes}`:'',`Contato: ${data.phone} · ${data.email}`].filter(Boolean).join('\n')
    const url=`https://wa.me/5514991028340?text=${encodeURIComponent(message)}`
    track('quote_whatsapp_opened'); window.open(url,'_blank','noopener,noreferrer'); toast.success('WhatsApp aberto. Revise e envie a mensagem por lá.'); setStep(steps.length)
  }
  if(step===steps.length)return <Frame><Done><Check size={34}/><h2>Seu pedido está pronto.</h2><p>Abrimos o WhatsApp com a mensagem preenchida. O pedido só será enviado quando você confirmar o envio no aplicativo.</p><Button type="button" onClick={()=>setStep(0)}>Criar outro pedido</Button></Done></Frame>
  return <Frame><StepMeta><span>Etapa {step+1} de {steps.length}</span><span>{Math.round(((step+1)/steps.length)*100)}%</span></StepMeta><Bar value={step+1} max={steps.length}><Indicator style={{transform:`translateX(-${100-((step+1)/steps.length)*100}%)`}}/></Bar><form onSubmit={handleSubmit(onSubmit)} noValidate><AnimatePresence mode="wait"><Panel key={step} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}} transition={{duration:.25}}><Title>{current.title}</Title>
    {step===0&&<Field><label htmlFor="destination">Destino desejado</label><input id="destination" placeholder="Ex.: Lençóis Maranhenses ou ainda não sei" {...register('destination')}/><small>{errors.destination?.message}</small></Field>}
    {step===1&&<Row><Field><label htmlFor="departureDate">Data de ida</label><input id="departureDate" type="date" {...register('departureDate')}/><small>{errors.departureDate?.message}</small></Field><Field><label htmlFor="returnDate">Data de volta</label><input id="returnDate" type="date" {...register('returnDate')}/><small>{errors.returnDate?.message}</small></Field></Row>}
    {step===2&&<Row><Field><label htmlFor="adults">Adultos</label><input id="adults" type="number" min="1" {...register('adults',{valueAsNumber:true})}/><small>{errors.adults?.message}</small></Field><Field><label htmlFor="children">Crianças</label><input id="children" type="number" min="0" {...register('children',{valueAsNumber:true})}/><small>{errors.children?.message}</small></Field></Row>}
    {step===3&&<Field as="fieldset"><legend>Orçamento total aproximado</legend><Choices>{budgets.map(v=><Choice key={v} $selected={values.budget===v}><input type="radio" value={v} {...register('budget')}/>{v}</Choice>)}</Choices><small>{errors.budget?.message}</small></Field>}
    {step===4&&<><Field as="fieldset"><legend>Selecione tudo que fizer sentido</legend><Choices>{prefs.map(v=><Choice key={v} $selected={values.preferences?.includes(v)}><input type="checkbox" value={v} {...register('preferences')}/>{v}</Choice>)}</Choices><small>{errors.preferences?.message}</small></Field><Field><label htmlFor="notes">Algo que não pode faltar? <span>(opcional)</span></label><textarea id="notes" {...register('notes')} placeholder="Conte sobre acessibilidade, ocasião especial ou uma vontade específica."/></Field></>}
    {step===5&&<><Row><Field><label htmlFor="name">Nome</label><input id="name" autoComplete="name" {...register('name')}/><small>{errors.name?.message}</small></Field><Field><label htmlFor="phone">WhatsApp</label><input id="phone" type="tel" autoComplete="tel" placeholder="(14) 99999-9999" {...register('phone')}/><small>{errors.phone?.message}</small></Field></Row><Field><label htmlFor="email">E-mail</label><input id="email" type="email" autoComplete="email" {...register('email')}/><small>{errors.email?.message}</small></Field><Field><CheckLine><input type="checkbox" {...register('consent')}/><span>Autorizo a DestinoVibe a usar estes dados para responder ao meu pedido, conforme a Política de Privacidade.</span></CheckLine><small>{errors.consent?.message}</small></Field></>}
    </Panel></AnimatePresence><Actions>{step>0?<Button type="button" onClick={()=>setStep(s=>s-1)}><ArrowLeft size={17}/> Voltar</Button>:<span/>}{step<steps.length-1?<Button type="button" onClick={next}>Continuar <ArrowRight size={17}/></Button>:<Button type="submit">Abrir no WhatsApp <ExternalLink size={17}/></Button>}</Actions></form></Frame>
}
