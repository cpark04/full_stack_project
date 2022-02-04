import React from "react";
import Button from "./button";
import Logo from "./logo";

class NavBar extends React.Component {



  render() {
    return <nav id="nav-bar">
      <p className='nav-explore'></p>
      <Logo />
      <Button currentUser={this.props.currentUser} logout={this.props.logout} />
    </nav>
  }
}

export default NavBar;