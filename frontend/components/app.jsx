import React from "react";
import {AuthRoute} from './../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';

const App = () => (
   <div>
    <header>
      <h1>SomeTrails</h1>
      <GreetingContainer />
    </header>
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
  </div>
);

export default App;