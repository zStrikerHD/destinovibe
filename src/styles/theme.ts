export const theme = {
  colors: {
    forest: '#102F2B', forestSoft: '#1B4540', ink: '#17211F', muted: '#5F6C68', sand: '#F4EFE5', paper: '#FBF9F4', white: '#FFFFFF', sea: '#BFD6CB', sun: '#E7A64A', coral: '#D96C52', line: '#D8DDD7',
  },
  fonts: { sans: "'Manrope', 'Avenir Next', 'Segoe UI', sans-serif", serif: "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Georgia, serif" },
  max: '1240px',
  shadow: '0 24px 70px rgba(16, 47, 43, .12)',
  mq: { tablet: '900px', mobile: '640px' },
} as const

export type AppTheme = typeof theme

declare module 'styled-components' {
  // styled-components requires interface augmentation here.
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends AppTheme {}
}
