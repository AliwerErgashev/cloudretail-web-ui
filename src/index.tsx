import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { history } from './common/history';
import { store } from './common/store';
import { App } from './components/App';
import './index.scss';

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.querySelector('#app')
);
