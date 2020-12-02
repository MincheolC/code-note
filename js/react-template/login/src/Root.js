import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';

function Root({ store }) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path='/' component={App} />
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
