import React, { useEffect } from "react";
import SearchBar from "../search/search_bar";

const PhotoSlides = (props) => {
  useEffect(() => {
    var images = [
        "https://cdn-assets.alltrails.com/assets/hero-images/hero-logged-out-1-w2800-c63d91e494af23fac3725e484635128457629b2a6f87086cf7587962e8396459.jpg",
        "https://cdn-assets.alltrails.com/assets/hero-images/hero-logged-out-3-w2800-8339122b575b18e0fc8720c2c42fe471234840cb3add6ced7b290b0cae0e1dde.jpg",
      ],
      index = 0,
      $bg_slides = $(".bg-slides");
    setInterval(function () {
      $bg_slides.animate({ opacity: 1 }, 500, function () {
        $bg_slides.css(
          "background",
          "rgba(184, 184, 184, 0.7) url(" + images[index] + ")"
        );
        index++;
        $bg_slides.animate({ opacity: 1 }, 500, function () {
          if (index === images.length) index = 0;
        });
      });
    }, 5000);
  }, []);

  return (
    <div className='slide-component'>
      <SearchBar {...props} />
    </div>
  );
};

export default PhotoSlides;
