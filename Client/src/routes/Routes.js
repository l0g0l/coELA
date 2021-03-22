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
import Payment from '../views/payment';
import Thanks from '../views/thanks'
import Luzonews from '../views/luzonews'
import MyDonations from '../views/myDonations'
import Community from '../views/community'
import CommunityChallenges from '../views/communityChallenges'
import CommunityRanking from '../views/communityRanking'
import PrivateRoute from './privateroutes'


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route  exact path='/' component={Login}></Route>
        <Route  path='/signup' component={SignUp}></Route>
        <PrivateRoute  path="/home" component={Home}></PrivateRoute>
        <PrivateRoute  path="/onedonation" component={OneDonation}></PrivateRoute>
        <PrivateRoute  path="/payment" component={Payment}></PrivateRoute>
        <PrivateRoute  path="/thanks" component={Thanks}></PrivateRoute>
        <PrivateRoute  path="/roundup" component={RoundUp}></PrivateRoute>
        <PrivateRoute  path="/percent" component={Percent}></PrivateRoute>
        <PrivateRoute  path="/periodic" component={Periodic}></PrivateRoute>
        <PrivateRoute  path="/luzon" component={Luzon}></PrivateRoute> 
        <PrivateRoute  path="/luzonews" component={Luzonews}></PrivateRoute> 
        <PrivateRoute  path="/mydonations" component={MyDonations}></PrivateRoute> 
        <PrivateRoute  path="/community" component={Community}></PrivateRoute> 
        <PrivateRoute  path="/challenges" component={CommunityChallenges}></PrivateRoute> 
        <PrivateRoute  path="/ranking" component={CommunityRanking}></PrivateRoute> 




      </Switch>
    </Router>

  );
}
export default Routes