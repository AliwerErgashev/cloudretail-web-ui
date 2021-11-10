import { ThemeProvider } from '@emotion/react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './common/store';
import { theme } from './common/theme';
import { App } from './components/App';
import { GlobalStyle } from './components/GlobalStyle';

render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#app')
);
