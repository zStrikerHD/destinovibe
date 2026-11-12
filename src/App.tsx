import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import styled from 'styled-components'
import { Layout } from './components/Layout'
import Home from './pages/Home'

const Destinations=lazy(()=>import('./pages/Destinations'))
const DestinationDetail=lazy(()=>import('./pages/DestinationDetail'))
const Services=lazy(()=>import('./pages/Services'))
const About=lazy(()=>import('./pages/About'))
const Testimonials=lazy(()=>import('./pages/Testimonials'))
const Contact=lazy(()=>import('./pages/Contact'))
const Privacy=lazy(()=>import('./pages/Privacy'))
const Quote=lazy(()=>import('./pages/Quote'))
const NotFound=lazy(()=>import('./pages/NotFound'))
const Loading=styled.div`min-height:70vh;display:grid;place-items:center;background:${({theme})=>theme.colors.paper};color:${({theme})=>theme.colors.forest};font-weight:800;`
const pending=<Loading role="status">Preparando sua próxima inspiração…</Loading>
const router=createBrowserRouter([{element:<Layout/>,children:[
  {path:'/',element:<Home/>},
  {path:'/destinos',element:<Suspense fallback={pending}><Destinations/></Suspense>},
  {path:'/destinos/:slug',element:<Suspense fallback={pending}><DestinationDetail/></Suspense>},
  {path:'/servicos',element:<Suspense fallback={pending}><Services/></Suspense>},
  {path:'/sobre',element:<Suspense fallback={pending}><About/></Suspense>},
  {path:'/depoimentos',element:<Suspense fallback={pending}><Testimonials/></Suspense>},
  {path:'/contato',element:<Suspense fallback={pending}><Contact/></Suspense>},
  {path:'/privacidade',element:<Suspense fallback={pending}><Privacy/></Suspense>},
  {path:'/orcamento',element:<Suspense fallback={pending}><Quote/></Suspense>},
  {path:'*',element:<Suspense fallback={pending}><NotFound/></Suspense>},
]}])
export default function App(){return <RouterProvider router={router}/>}
