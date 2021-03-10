import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Login from '../pages/Login'
import Dashboard from '../views/dashboard';

const Routes = () => {
  return (
    <Router>
    <Switch>
        
        <Route exact path='/' component={Login}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
    </Switch>
</Router>
  
  );
}
export default Routes