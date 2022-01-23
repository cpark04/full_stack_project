import React from "react";
import Button from "./button";
import Logo from "./logo";

class NavBar extends React.Component {



  render() {
    return <nav id="nav-bar">
      <p className='nav-explore'>Explore</p>
      <Logo />
      <Button/>
    </nav>
  }
}

export default NavBar;