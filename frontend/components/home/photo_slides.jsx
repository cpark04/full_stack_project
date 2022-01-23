import React from "react";
import SearchBar from "../search/search_bar";

class PhotoSlides extends React.Component {

  componentDidMount() {
    var images = ['https://bit.ly/3qPY40M', 'https://bit.ly/3AnlSMu'],
    index  = 0,
    $bg_slides   = $('#bg-slides');

    setInterval(function() {
      $bg_slides.animate({ opacity: 0 }, 500, function() {
        $bg_slides.css('background-image', 'url('+images[++index]+')');
        $bg_slides.animate({ opacity: 1 }, 500, function() {
          if(index === images.length) index = 0;
        });
      });
    }, 6000);
  }

  render() {
    return <div className='slide-component'>
      <SearchBar />
    </div>
  }
}

export default PhotoSlides;