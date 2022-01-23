import React from "react";
import PhotoSlides from "./photo_slides";
import SearchBar from "../search/search_bar";

class Home extends React.Component {
  render(){
    return <div className="home-page">
      <div className='bg-slides'>
        <PhotoSlides />
      </div>
      {/* <SearchBar /> */}
      <div className='trail-cards'></div>
      
    </div>
  }
}

export default Home;