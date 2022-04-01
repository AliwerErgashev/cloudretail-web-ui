export const theme = {
  borderColor: '#ddd',
  borderRadius: '0.3em',
  fontSize: '16px',
  primaryColor: '#0d6efd',
  textColor: '#555',
} as const;

type AppTheme = typeof theme;

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}
