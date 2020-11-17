import React, {Component} from 'react';
import {Route, Switch,  BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Restrict from './pages/Restrict';

//component={() => <Login username={this.state.username} />}

export default function App(){
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Login />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Restrict">
            <Restrict />
          </Route>
          <Route path="/Profile">
            <Profile />
          </Route>
      </Switch>
    </Router>
  )
}
