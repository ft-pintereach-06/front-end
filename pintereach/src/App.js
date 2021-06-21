import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import SignUpForm from './components/SignUp';
import Login from './components/Login';
import Homepage from './components/Homepage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Connected...</h1>
        </header>
        <Switch>
          <Route path='/home' component={Homepage}/>
          <Route path ='/signup' component={SignUpForm}/>
          <Route exact path='/' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
