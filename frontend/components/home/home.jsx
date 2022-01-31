import React from "react";
import PhotoSlides from "./photo_slides";
import SearchBar from "../search/search_bar";
import TrailCards from "../trail_cards/trail_cards";
import { Link } from "react-router-dom";
import Slider from "react-slick";

class Home extends React.Component {

  componentDidMount() {
    this.props.fetchParks();
    this.props.fetchTrails();
  }

  difficultyColorRender(diff) {
    if (diff === "hard") {
      return <span className="trail-difficulty" style={{backgroundColor:"#676767"}}>{diff}</span>
    } else if (diff === "moderate") {
      return <span className="trail-difficulty" style={{backgroundColor:"#4bafe1"}}>{diff}</span>
    } else {
      return <span className="trail-difficulty" style={{backgroundColor:"#69a041"}}>{diff}</span>
    }
  }

  simpleSlider() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
    };

    const {trails} = this.props
    if (trails) {
      return(
        <Slider {...settings}>
          
          {trails.map((trail, idx) => {
            return (
              <a href={`#/trail/${trail.id}`} key={'trail'+`${idx}`} className="trail-card-container">
                <div className="trail-card">
                  <div>
                    <div className="trail-card-photo-container">
                      <img src={trail.headPhoto} alt="" className="trail-card-photo" />
                    </div>
                  </div>
                  <div className="trail-card-info-container">
                    <div className="trail-card-name">{trail.trail_name}</div>
                    <div className="trail-card-park">{trail.park_name}</div>
                    <div className="trail-card-rating-container">
                      {this.difficultyColorRender(trail.difficulty)}
                      <span className="trail-stars">
                        <span className="fa fa-star checked star"></span>
                        <span className="fa fa-star checked star"></span>
                        <span className="fa fa-star checked star"></span>
                        <span className="fa fa-star checked star"></span>
                        <span className="fa fa-star star"></span>
                      </span>
                    </div>
                    <div className="trail-card-time-container">
                      <span className="trail-card-length">Length: {trail.length}</span>
                      <span>&nbsp;•&nbsp;</span>
                      <span className="trail-card-time">Est. 3h 53m</span>
                    </div>
                  </div>
                </div>
              </a>
            )
          })}
        </Slider>
      )
    }
  }

  render(){
    if (!this.props.parks) return null;
    if (!this.props.trails) return null;

    const {parks, trails} = this.props

    return <div className="home-page">
      
      <div className='bg-slides'>
        <PhotoSlides />
      </div>


      <div className='home-trail-card-container'>
          {this.simpleSlider()}       
      </div>
      

      <div className="module-picture">
        <div className="module-text">
          <h1 className="module-title">Explore with</h1>
          <h1 className="module-title2">confidence</h1>
          <div className="module-description">Inspiration and guidance for wherever your trail may lead.</div>
          <div className="app-rating"></div>
        </div>
      </div>
      
      <div className="phone-module">
        
      </div>

    </div>
  }
}

export default Home;