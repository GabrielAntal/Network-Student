import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import './App.css';

class App extends Component{
  render(){
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/Home' component={Home} />
          <Route path='/Profile' component={Profile} />
        </Switch>
      </div>
    )
    return(
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
