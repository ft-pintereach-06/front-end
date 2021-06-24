import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import SignUpForm from './components/SignUp';
import Login from './components/Login';
import Homepage from './components/Homepage';
import ArticleForm from './components/ArticleForm';
import NavBar from './components/NavBar';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <NavBar />
        <Switch>
          <PrivateRoute exact path='/home' component={Homepage} />
          <Route path ='/signup' component={SignUpForm}/>
          <Route exact path='/' component={Login} />
          <PrivateRoute exact path='/form' component={ArticleForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
