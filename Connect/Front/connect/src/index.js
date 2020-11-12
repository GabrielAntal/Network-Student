import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Route, Router, Switch}   from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';

render(
  <App/>,
  document.getElementById("root")
);

reportWebVitals();
