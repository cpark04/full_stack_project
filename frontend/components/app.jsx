import React from "react";
import { Route } from "react-router-dom";
import {AuthRoute} from './../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import NavBarContainer from "./navbar/navbar_container";
import HomeContainer from "./home/home_container";

const App = () => (
   <div>
    <header>
      <NavBarContainer />
    </header>
    <Route exact path="/" component={HomeContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
  </div>
);

export default App;