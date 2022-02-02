import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {AuthRoute, ProtectedRoute} from './../util/route_util';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import NavBarContainer from "./navbar/navbar_container";
import HomeContainer from "./home/home_container";
import ParkContainer from "./park/park_container";
import TrailContainer from "./trail/trail_container";
import Footer from "./footer/footer";
import EditReviewContainer from "./review/edit_review_container";

const App = () => (
   <div>
    <header>
      <NavBarContainer />
    </header>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route path="/park/:parkId" component={ParkContainer} />
      <ProtectedRoute path="/trail/:trailId" component={TrailContainer} />
      <Route path="/review/:reviewId" component={EditReviewContainer} />
      

      <Route exact path="/" component={HomeContainer} />
      <Redirect from="*" to="/" />
    </Switch>

    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;