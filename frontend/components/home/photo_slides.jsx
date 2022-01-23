import React from "react";
import SearchBar from "../search/search_bar";

class PhotoSlides extends React.Component {

  componentDidMount() {
    var images = ['https://cdn-assets.alltrails.com/assets/hero-images/hero-logged-out-1-w2800-c63d91e494af23fac3725e484635128457629b2a6f87086cf7587962e8396459.jpg',
      'https://cdn-assets.alltrails.com/assets/hero-images/hero-logged-out-3-w2800-8339122b575b18e0fc8720c2c42fe471234840cb3add6ced7b290b0cae0e1dde.jpg'],
    index = 0,
    $bg_slides = $('.bg-slides');

    setInterval(function() {
      $bg_slides.animate({ opacity: 0 }, 500, function() {
        $bg_slides.css('background-image', 'url('+images[index]+')');
        index++;
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