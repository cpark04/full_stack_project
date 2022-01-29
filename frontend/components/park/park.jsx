import React from "react";
import Breadcrumb from "./breadcrumb";
import Slider from "react-slick"
import ShareModal from "../modal/share_modal";
import { useState } from "react";


class Park extends React.Component {

  constructor(props) {
    super(props);
  }

  showMore(e) {
    e.preventDefault();
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (btnText.innerHTML === "Read more") {
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    } else {
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    }
  }

  simpleSlider() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
    };

    const {park} = this.props
    if (park.trails) {
      return(
        <Slider {...settings}>
          
          {Object.values(park.trails).map((trail, idx) => {
            return (
              <div key={'trail' + `${idx}`}>
                <a href={`#/trail/${trail.id}`} ><img src={(trail.headPhoto)} alt="" className="slide-img"/></a>
              </div>
            )
          })}
        </Slider>
      )
    }
  }
  

  componentDidMount(){
    this.props.fetchPark(this.props.match.params.parkId);
  }

  socialLinkRender() {
    if (!this.props.park.social_url) return null;

   return JSON.parse(this.props.park.social_url).map((url, idx) => {
      return <a className="park-link-individual" key={'social'+`${idx}`} href={url[1]}>{url[0]}</a>
    })
  }

  hoursRender() {
    if (!this.props.park.hours) return null;

    return <div className="park-hours">
      <div className="park-sub-title">Park hours</div>
      <div className="hour-table">
        <div className="table-day">
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
          <div>Sunday</div>
        </div>
        <div className="table-hours">
          {JSON.parse(this.props.park.hours).map((hour, idx) => {
            return <div key={idx}>{hour}</div>
          })}
        </div>
      </div>
    </div>
  }

  printPage(e) {
    e.preventDefault();
    window.print()
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

  render() {
    if (!this.props.park) return null;
    const {park} = this.props;



    return <div className="park-container">
      <div className="park-search-component">
        <Breadcrumb item={park} />

        <form className='park-search-form'>
          <input type="text" className="park-search-bar" placeholder="Enter park or trail name"/>
          <button className='park-search-button'>
          </button>
        </form>

      </div>

      <div className="park-trail-photos">
        {this.simpleSlider()}
      </div>

      <div className="park-module">
        <div className="park-title-info">
          <p className="park-title">Best Trails in {park.park_name}</p>
          <div className="park-review">
            <div className="park-stars">
              <span className="fa fa-star checked star"></span>
              <span className="fa fa-star checked star"></span>
              <span className="fa fa-star checked star"></span>
              <span className="fa fa-star checked star"></span>
              <span className="fa fa-star star"></span>
            </div>
            <div className='park-review-text'>1032 Reviews</div>
          </div>
        </div>

        <div className="park-summary">
          <div className="park-intro">{park.intro}</div>
          <div id="more">
            <div className="park-text-description">Description</div>
            <div className="park-description">{park.description}</div>
          </div>
          <a href="" onClick={this.showMore} id="myBtn">Read more</a>
        </div>

        <div className="park-map-container">
          <img src={park.mapUrl} alt="" className="park-map"/>
          <div className="dir-print-share-container">
            <a href={`https://www.google.com/maps/dir/Current+Location/${park.latitude},${park.longitude}`} className="park-dir" target="_blank">
              <div className="dir-button"></div>
              <span>Directions</span>
            </a>

            <a href='' className="park-dir" onClick={this.printPage}>
              <div className="print-button"></div>
              <span>Print map</span>
            </a>

            <a className="park-dir">
              <div className="share-button"></div>
              <span>Share</span>
            </a>
          </div>
        </div>

        <div className="park-information">
          <div className="park-information-title">Park information</div>
          <div className="park-information-main">
            <div className="park-information-left">
              <div className="park-acre">
                <div className="park-sub-title">Acreage:</div>
                <div>{park.acre}</div>
              </div>
             {this.hoursRender()}
            </div>
            <div className="park-information-right">
              <div className="park-contact">
                <div className="park-sub-title">Contact</div>
                <div>{park.contact}</div>
              </div>
              <div className="park-links">
                <div className="park-sub-title">Helpful links</div>
                <div className="park-link">
                  {this.socialLinkRender()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="park-trail-bottom-container">
        <div className="park-trail-index-container">
          <div className="park-trail-top-trails">Top Trails</div>
          <div className="park-trail-index">
            {Object.values(park.trails).map((trail, idx) => {
              return (
                <div key={'park'+`${idx}`} className="park-trail-card-container">
                  <a href={`/#/trail/${trail.id}`}>
                    <div className="park-trail-card-img-cont">
                      <img src={trail.headPhoto} alt="" className="trail-card-img"/>
                    </div>
                  </a>
                  <a href={`/#/trail/${trail.id}`}>
                    <div className="park-trail-info-container">
                      <div className="park-trail-info-name">#{idx+1} - {trail.trail_name}</div>
                      <div className="park-trail-info-park">{trail.park_name}</div>
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
                        <span>Length: {trail.length}</span>
                        <span>&nbsp;•&nbsp;</span>
                        <span>Est. 3h 53m</span>
                      </div>
                      <div className="trail-card-description-container">
                        {trail.description}
                        <div className="park-trail-show-more">Show more</div>
                      </div>
                    </div>
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>

    </div>
  }
}

export default Park;