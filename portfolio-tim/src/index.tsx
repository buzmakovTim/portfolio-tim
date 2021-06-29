import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';
import State from './state/State';


ReactDOM.render(
  // BrowserRouter we gonna use instead of HashRouter for real domain (HashRouter using for GitHub pages) 
  // as GitHub not working with BrowserRouter 
  <HashRouter>   
        <React.StrictMode>
                <App state={State}/>
        </React.StrictMode>
  </HashRouter>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
