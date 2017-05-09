import React from 'react';
import ReactDOM from 'react-dom';
import { appStore } from './app-store'
import App from './components/App';

ReactDOM.render(
  <App store={appStore} />,
  document.getElementById('root')
);