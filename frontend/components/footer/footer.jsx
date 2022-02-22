import React from "react";

const Footer = () => {
  return <div className="footer-container">
    <div className="footer-logo">
      <img src='/logoImg.png'alt="" width="55px"/>
      <span className="logo-title">SomeTrails</span>
    </div>
    <div className="footer-social">
      <div className="social-button">
        <a href="https://www.github.com/cpark04" target="_blank">
          <img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/buttons/github.png" alt="" className="github-button"/>
        </a>

        <a href="https://www.linkedin.com/in/chris-p-7b087b46/" target="_blank">
          <img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/buttons/linkedin.png" alt="" className="linkedin-button"/>
        </a>

        <a href="https://angel.co/u/chris-park-23" target="_blank">
          <img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/buttons/angellist.png" alt="" className="angel-button"/>
        </a>


      </div>
      <div className="footer-name">Chris Park 2021</div>
    </div>
  </div>
}

export default Footer