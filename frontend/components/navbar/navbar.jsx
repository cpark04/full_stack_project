import React from "react";
import Button from "./button";
import Logo from "./logo";

class NavBar extends React.Component {



  render() {
    return <nav id="nav-bar">
      Explore
      <Logo />
      <Button/>
    </nav>
  }
}

export default NavBar;