import React from "react";
import PhotoSlides from "./photo_slides";

class Home extends React.Component {
  render(){
    return <div className="home-page">
      <div className='bg-slides'>
        <PhotoSlides />
      </div>
      <div className='trail-cards'></div>
      
    </div>
  }
}

export default Home;