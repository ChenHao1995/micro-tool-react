import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const loadReactApp = function(id){
  const root = ReactDOM.createRoot(document.getElementById(id));
  root.render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  );
}
if(!window.__isMainWeb){
  loadReactApp('root')
}

window.reloadReactApp = loadReactApp

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
