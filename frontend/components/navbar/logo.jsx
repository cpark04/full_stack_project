import React from "react";
import { Link } from "react-router-dom";

class Logo extends React.Component {

  render() {
    return (
      <Link to='/' className="logo">
        <img src='/logoImg.png'alt="" width="55px"/>
        <span className="logo-title">SomeTrails</span>
      </Link>
    )
  }
}

export default Logo;