import React from "react";
import { Link } from "react-router-dom";

class Button extends React.Component {

  render() {
    let buttons = <div className="nav-button">
      <Link to='/signup' className="session-button">Sign Up</Link>
      <Link to='/login' className="session-button">Login</Link>
    </div>

    return (
      buttons
    )
  }
}


export default Button;