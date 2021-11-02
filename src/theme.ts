export const theme = {
  borderColor: '#ddd',
  borderRadius: '0.3em',
  fontFamily: 'Roboto, sans-serif',
  fontSize: '16px',
  primaryColor: '#0d6efd',
  textColor: '#555',
} as const;

type AppTheme = typeof theme;

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends AppTheme {}
}
