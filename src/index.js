import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import store from './redux/store'
import login from './components/login';

console.log(store.getState());

const routing = (
  <Router>
    <div>
      <Link to="/login">Login</Link>
    </div>
    <Switch>
      <Route exact path="/login" component={login} />
    </Switch>
  </Router>
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);

const app = (<Provider store={store}>
  <App />
</Provider>);