import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginHookForm from './components/LoginHookForm';
import RegistroHookForm from './components/RegistroHookForm';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component= {Home} />
      <Route path="/loginHookForm" component= {LoginHookForm} />
      <Route path="/registerHookForm" component= {RegistroHookForm} />
      <Route path="/about" component= {About} />
    </Switch>
    </BrowserRouter>
   
  );
}

export default App;
