import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return <div id="button">
    <Link to='/signup' className="session-button">Sign Up</Link>
    <Link to='/login' className="session-button">Login</Link>
  </div>
}

export default Button;