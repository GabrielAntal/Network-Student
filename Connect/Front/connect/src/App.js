import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import login from './pages/Login';
import home from './pages/Home';
import profile from './pages/Profile';
import './App.css';




class App extends Component{

  

  render(){
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={login} />
          <Route path='/Home' component={home} />
          <Route path='/Profile' component={profile} />
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
