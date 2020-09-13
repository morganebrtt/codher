import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import CompleteRegistration from './Components/CompleteRegistration/CompleteRegistration';
import Home from './Components/Home/Home';
import Auth from './Components/Auth/Auth';

function App() {
  return (
      <>
      <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/auth/register" component={Auth} />
            <Route exact path="/auth/login" component={Auth} />
            <Route exact path="/registration" component={CompleteRegistration} />
          </Switch>
        </Router>
      </>
  );
};

export default App;