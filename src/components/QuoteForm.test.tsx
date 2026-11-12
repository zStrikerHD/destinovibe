import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'
import { QuoteForm } from './QuoteForm'
import { theme } from '../styles/theme'

test('blocks progress when destination is empty',async()=>{const user=userEvent.setup();render(<ThemeProvider theme={theme}><QuoteForm/></ThemeProvider>);await user.click(screen.getByRole('button',{name:/continuar/i}));expect(await screen.findByText(/conte para onde/i)).toBeInTheDocument();expect(screen.getByText(/etapa 1 de 6/i)).toBeInTheDocument()})

test('advances after a valid destination',async()=>{const user=userEvent.setup();render(<ThemeProvider theme={theme}><QuoteForm/></ThemeProvider>);await user.type(screen.getByLabelText(/destino desejado/i),'Patagônia');await user.click(screen.getByRole('button',{name:/continuar/i}));expect(await screen.findByText(/quando você quer ir/i)).toBeInTheDocument()})
