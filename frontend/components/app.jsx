import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {AuthRoute} from './../util/route_util';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import NavBarContainer from "./navbar/navbar_container";
import HomeContainer from "./home/home_container";
import ParkContainer from "./park/park_container";
import TrailContainer from "./trail/trail_container";
import Footer from "./footer/footer";

const App = () => (
   <div>
    <header>
      <NavBarContainer />
    </header>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route path="/park/:parkId" component={ParkContainer} />
      <Route path="/trail/:trailId" component={TrailContainer} />

      <Route exact path="/" component={HomeContainer} />
      <Redirect from="*" to="/" />
    </Switch>

    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;