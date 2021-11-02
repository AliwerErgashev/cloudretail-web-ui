import { ThemeProvider } from '@emotion/react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { history } from './common/history';
import { store } from './common/store';
import { App } from './components/App';
import { GlobalStyle } from './components/GlobalStyle';
import { theme } from './theme';

render(
  <Provider store={store}>
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Router>
  </Provider>,
  document.querySelector('#app')
);
