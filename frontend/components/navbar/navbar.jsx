import React from "react";
import Button from "./button";
import Logo from "./button";

class NavBar extends React.Component {



  render() {
    return <nav id="nav-bar">
      Explore
      <i class="fas fa-mountain"><span>SomeTrails</span></i>
      <Button/>
    </nav>
  }
}

export default NavBar;