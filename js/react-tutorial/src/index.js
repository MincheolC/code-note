import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import * as Sentry from '@sentry/react';
import * as serviceWorker from './serviceWorker';

Sentry.init({dsn: "https://277e311cbbff4d759ca83d2c4d0ed0c2@o435971.ingest.sentry.io/5396238"});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
