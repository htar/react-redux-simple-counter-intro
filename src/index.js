import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import {history} from './store'
import store from './store'
import Main from './main'


const router = (
  <Provider store={store}>
    <Router history={history}>
    <Route path="/" component={Main}>
    </Route>
    </Router>
  </Provider>
)
ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();



