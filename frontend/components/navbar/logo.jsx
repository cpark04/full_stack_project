import React from "react";
import { Link } from "react-router-dom";

class Logo extends React.Component {

  // constructor(){
  //   this.handleClick = this.handleClick.bind(this)
  // }

  // handleClick(e) {
    
  // }

  render() {
    return (
      <Link to='/' className="logo">
        <img src='/logoImg.png'alt="" width="65px"/>
        <span className="logo-title">SomeTrails</span>
      </Link>
    )
  }
}

export default Logo;