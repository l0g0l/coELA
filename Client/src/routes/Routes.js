import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Login from '../pages/Login'
import Home from '../views/home';
import OneDonation from '../views/oneDonation';
import Percent from '../views/percent';
import RoundUp from '../views/roundUp'; 
import Periodic from '../views/periodic';
import Luzon from '../views/luzon';
import SignUp from '../views/signUp';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route  exact path='/' component={Login}></Route>
        <Route  path='/signup' component={SignUp}></Route>
        <Route  path="/home" component={Home}></Route>
        <Route  path="/onedonation" component={OneDonation}></Route>
        <Route  path="/roundup" component={RoundUp}></Route>
        <Route  path="/percent" component={Percent}></Route>
        <Route  path="/periodic" component={Periodic}></Route>
        <Route  path="/luzon" component={Luzon}></Route> 
        <Route  path="/mydonations" component={Luzon}></Route> 
        <Route  path="/community" component={Luzon}></Route> 




      </Switch>
    </Router>

  );
}
export default Routes