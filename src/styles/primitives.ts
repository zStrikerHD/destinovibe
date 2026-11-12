import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: min(${({ theme }) => theme.max}, calc(100% - 40px)); margin-inline: auto;
  @media (max-width: ${({ theme }) => theme.mq.mobile}) { width: min(100% - 24px, ${({ theme }) => theme.max}); }
`

export const Section = styled.section<{ $tone?: 'paper' | 'sand' | 'forest' }>`
  padding-block: clamp(72px, 10vw, 132px);
  ${({ $tone, theme }) => $tone === 'sand' && css`background: ${theme.colors.sand};`}
  ${({ $tone, theme }) => $tone === 'forest' && css`background: ${theme.colors.forest}; color: ${theme.colors.white};`}
`

export const Eyebrow = styled.p`
  margin-bottom: 18px; color: ${({ theme }) => theme.colors.coral}; font-size: .75rem; font-weight: 800; letter-spacing: .16em; text-transform: uppercase;
`

export const Display = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif}; font-size: clamp(3.5rem, 8vw, 8.4rem); font-weight: 400; letter-spacing: -.055em; line-height: .88;
`

export const H2 = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif}; font-size: clamp(2.45rem, 5vw, 5.4rem); font-weight: 400; letter-spacing: -.04em; line-height: .96;
`

export const Lead = styled.p`
  color: ${({ theme }) => theme.colors.muted}; font-size: clamp(1.05rem, 1.7vw, 1.3rem); line-height: 1.7;
`

const buttonStyle = css`
  min-height: 50px; display: inline-flex; align-items: center; justify-content: center; gap: 9px; border: 1px solid transparent; border-radius: 999px; padding: 12px 22px; background: ${({ theme }) => theme.colors.sun}; color: ${({ theme }) => theme.colors.forest}; font-size: .88rem; font-weight: 800; text-decoration: none; transition: transform .2s, background .2s, color .2s;
  &:hover { transform: translateY(-2px); background: #efb75f; }
`

export const ButtonLink = styled(Link)`${buttonStyle}`
export const ButtonAnchor = styled.a`${buttonStyle}`
export const Button = styled.button`${buttonStyle}`

export const GhostLink = styled(Link)`
  min-height: 48px; display: inline-flex; align-items: center; gap: 8px; color: inherit; font-weight: 750; text-decoration: none; border-bottom: 1px solid currentColor;
`

export const PageHero = styled.header<{ $image?: string }>`
  position: relative; min-height: min(76vh, 760px); display: grid; align-items: end; padding-block: 180px 80px; overflow: hidden; color: white; background: ${({ $image, theme }) => $image ? `linear-gradient(90deg, rgba(7,25,23,.84), rgba(7,25,23,.18)), url(${$image}) center/cover` : theme.colors.forest};
  &::after { content: ''; position: absolute; inset: auto 0 0; height: 24%; background: linear-gradient(transparent, rgba(4,20,18,.38)); pointer-events: none; }
  > * { position: relative; z-index: 1; }
  ${Display} { max-width: 950px; }
  ${Lead} { max-width: 650px; color: rgba(255,255,255,.82); }
`

export const SplitHead = styled.div`
  display: grid; grid-template-columns: 1.2fr .8fr; align-items: end; gap: 60px; margin-bottom: clamp(42px, 7vw, 80px);
  ${H2}, ${Lead} { margin-bottom: 0; }
  @media (max-width: ${({ theme }) => theme.mq.tablet}) { grid-template-columns: 1fr; gap: 24px; }
`

export const SrOnly = styled.span`
  position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;
`
