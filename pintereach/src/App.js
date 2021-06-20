import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignUpForm from './components/SignUp';
import Login from './components/Login';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Connected...</h1>
      </header>
       <Login/>
    </div>
  );
}

export default App;
