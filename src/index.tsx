import { ThemeProvider } from '@emotion/react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './common/store';
import { theme } from './common/theme';
import { App } from './components/App';
import { GlobalStyle } from './components/GlobalStyle';

createRoot(document.querySelector('#app') as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
