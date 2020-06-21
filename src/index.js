import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/app.container/App';
import { Provider } from 'react-redux'
import store from './redux/store'


console.log(store);

const app = (
<Provider store={store}>
  <App />
</Provider>
);

ReactDOM.render(
  app,
  document.getElementById('root')
);
