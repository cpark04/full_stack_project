import React from "react";
import { Route, Switch } from "react-router-dom";
import {AuthRoute} from './../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import NavBarContainer from "./navbar/navbar_container";
import HomeContainer from "./home/home_container";
import ParkContainer from "./park/park_container";

const App = () => (
   <div>
    <header>
      <NavBarContainer />
    </header>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route path="/park/:parkId" component={ParkContainer} />

      <Route exact path="/" component={HomeContainer} />
    </Switch>
  </div>
);

export default App;