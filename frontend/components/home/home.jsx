import React, { useEffect } from "react";
import PhotoSlides from "./photo_slides";
import Slider from "react-slick";
import StarRatings from "react-star-ratings";

const Home = (props) => {
  useEffect(() => {
    props.fetchParks();
    props.fetchTrails();
  }, []);

  const difficultyColorRender = (diff) => {
    if (diff === "hard") {
      return (
        <span
          className='trail-difficulty'
          style={{ backgroundColor: "#676767" }}
        >
          {diff}
        </span>
      );
    } else if (diff === "moderate") {
      return (
        <span
          className='trail-difficulty'
          style={{ backgroundColor: "#4bafe1" }}
        >
          {diff}
        </span>
      );
    } else {
      return (
        <span
          className='trail-difficulty'
          style={{ backgroundColor: "#69a041" }}
        >
          {diff}
        </span>
      );
    }
  };

  const simpleSlider = () => {
    const settings = {
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
    };

    const { trails } = props;
    if (trails) {
      return (
        <Slider {...settings}>
          {trails.map((trail, idx) => {
            return (
              <a
                href={`#/trail/${trail.id}`}
                key={"trail" + `${idx}`}
                className='trail-card-container'
              >
                <div className='trail-card-home'>
                  <div>
                    <div className='trail-card-photo-container'>
                      <img
                        src={trail.headPhoto}
                        alt=''
                        className='trail-card-photo'
                      />
                    </div>
                  </div>
                  <div className='trail-card-info-container'>
                    <div className='trail-card-name'>{trail.trail_name}</div>
                    <div className='trail-card-park'>{trail.park_name}</div>
                    <div className='trail-card-rating-container'>
                      {difficultyColorRender(trail.difficulty)}
                      <StarRatings
                        rating={trail.avg_rating}
                        starDimension='15px'
                        starRatedColor='#f5d24b'
                        starSpacing='2px'
                        className='review-user-date'
                      />
                      <span className='top-num-reviews'>
                        ({trail.num_reviews})
                      </span>
                    </div>
                    <div className='trail-card-time-container'>
                      <span className='trail-card-length'>
                        Length: {trail.length}
                      </span>
                      <span>&nbsp;•&nbsp;</span>
                      <span className='trail-card-time'>Est. 3h 53m</span>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </Slider>
      );
    }
  };

  return (
    <div className='home-page'>
      <div className='bg-slides'>
        <PhotoSlides {...props} />
      </div>

      <div className='home-trail-card-container'>{simpleSlider()}</div>

      <div className='module-picture'>
        <div className='module-text'>
          <h1 className='module-title'>Explore with</h1>
          <h1 className='module-title2'>confidence</h1>
          <div className='module-description'>
            Inspiration and guidance for wherever your trail may lead.
          </div>
          <div className='app-rating'></div>
        </div>
      </div>

      <div className='phone-module'></div>
    </div>
  );
};

export default Home;
