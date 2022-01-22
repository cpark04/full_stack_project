import React from "react";
import {AuthRoute} from './../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import NavBarContainer from "./navbar/navbar_container";

const App = () => (
   <div>
    <header>
      <NavBarContainer />
      {/* <GreetingContainer /> */}
    </header>
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
  </div>
);

export default App;