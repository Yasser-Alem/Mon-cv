import React from 'react';
import { App } from './app/app';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './app/stylees.css'



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
