import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Toaster } from 'sonner'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout(){return <><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Header/><main id="conteudo"><Outlet/></main><Footer/><Toaster richColors position="top-center"/><ScrollRestoration/></>}
