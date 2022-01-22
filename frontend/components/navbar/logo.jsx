import React from "react";

class Logo extends React.Component {

  constructor(){
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    
  }

  render() {
    return <div className="logo" onClick={this.handleClick}>
      <img src="https://i.imgur.com/CsU8233.png" alt="" width="65px"/>
      <span className="logo-title">SomeTrails</span>
    </div>
  }
}

export default Logo;