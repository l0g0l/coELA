import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Routes from './routes/Routes'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
