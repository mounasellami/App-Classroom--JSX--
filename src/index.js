import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//ReactDOM.render(what to show, where to show it, (when that render fct has complited));
ReactDOM.render( <React.StrictMode> <App /> </React.StrictMode>, document.getElementById('root') );

reportWebVitals();
