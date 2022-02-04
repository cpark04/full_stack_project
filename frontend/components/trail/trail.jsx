import React from "react";
import Breadcrumb from "../park/breadcrumb";
import { Link } from "react-router-dom";
import MenuBar from "../menubar/menu_bar";
import WeatherBar from "../menubar/weather_bar";
import { fetchWeather } from "../../util/weather_api_util";
import ReviewBar from "../menubar/review_bar";
import StarRatings from "react-star-ratings";
import TrailSearchBar from "../search/trail_search_bar";

class Trail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      forecastArray: '',
    }
    this.photoRedirect = this.photoRedirect.bind(this)
  }

  componentDidMount() {
    this.props.fetchTrails();
    this.props.fetchTrail(this.props.match.params.trailId)
      .then(() => this.weatherCall());
    this.props.fetchPhotos();
  }

  printPage(e) {
    e.preventDefault();
    window.print()
  }

  photoRedirect(e) {
    e.preventDefault();
    // let trailList = document.getElementById('trail-right-list')
    let photoButton = document.querySelectorAll('div button')[11]
    photoButton.scrollIntoView({block: "center"})
    photoButton.click();
  }

  tagsRender(){
    let render = JSON.parse(this.props.trail.tags)
    return render.map((tag, idx) => {
      return <div key={'tag'+`${idx}`} className="trail-tag">
        <span className='trail-indiv-tag'>{tag}</span>
      </div>
    })
  }

  weatherCall() {
    if (!this.props.trail) return null
    fetchWeather(this.props.trail.latitude, this.props.trail.longitude)
      .then(data => this.weatherRender(data))
  }

  weatherRender(weather) {
    let forecastArr = weather.forecast.forecastday;
    this.setState({forecastArray: forecastArr})
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
    if (!this.props.trail) return null;
    if (!this.props.trails) return null;
    if (!this.props.photos) return null;
    const {trail, trails, parks} = this.props;
    (this.props.trails)

    return <div className="trail-bg-color">
    <div className="trail-container">
      <div className="trail-search-component">
        <Breadcrumb item={trail} />
        <TrailSearchBar parks={parks} trails={trails} />
      </div>

      <div className="trail-photo-info-container">
        <div className="trail-photo-bar" style={{background: `linear-gradient(transparent,rgba(0,0,0,.7)), url('${trail.headPhoto}')`}}>
        </div>
        <div className="trail-photo-info"> 
          <h1 className="trail-photo-title">{trail.trail_name}</h1>
          <div className="trail-rating-diff">
            {this.difficultyColorRender(trail.difficulty)}
            <StarRatings rating={trail.avg_rating} starDimension="15px" starRatedColor="#f5d24b" starSpacing="2px" className="star-ratings"/>
            <span className="top-num-reviews">({trail.num_reviews})</span>
          </div>
          <Link className="trail-park-name" to={`/park/${trail.park_id}`}>{trail.park_name}</Link>
        </div>
        <div className="trail-photo-buttons">
          <ul className="trail-button-photo-uo">
            <li className="trail-button-photo trail-photo-li">
              <a href="" className="trail-button-photo-a" id="photo-tab" onClick={this.photoRedirect}>
                <div className="trail-button-icon-container">
                  <div className="trail-button-photo-icon"></div>
                </div>
                <span className="trail-button-photo-text">Photos</span>
              </a>
            </li>
            <li className="trail-button-directions trail-photo-li">
              <a href={`https://www.google.com/maps/dir/Current+Location/${trail.latitude},${trail.longitude}`} className="trail-button-photo-a">
                <div className="trail-button-icon-container">
                  <div className="trail-button-dir-icon"></div>
                </div>
                <span className="trail-button-photo-text">Directions</span>
              </a>
            </li>
            <li className="trail-button-print trail-photo-li">
              <a href="" className="trail-button-photo-a" onClick={this.printPage}>
                <div className="trail-button-icon-container">
                  <div className="trail-button-print-icon"></div>
                </div>
                <span className="trail-button-photo-text">Print/PDF</span>
              </a>
            </li>
            {/* <li className="trail-button-share trail-photo-li">
              <a href="" className="trail-button-photo-a">
                <div className="trail-button-icon-container">
                  <div className="trail-button-share-icon"></div>
                </div>
                <span className="trail-button-photo-text">Share</span>
              </a>
            </li> */}
          </ul>
        </div>
      </div>

      <div className="trail-body-container">
        
        <div className="trail-left-container">

          <div className="trail-left-intro">{trail.intro}</div>

          <div className="trail-left-info">
            <div className="trail-info-block">
              <div className="trail-info-text">Length</div>
              <div className="trail-info-value">{trail.length}</div>
            </div>
            <div className="trail-info-block">
              <div className="trail-info-text">Elevation gain</div>
              <div className="trail-info-value">{trail.elevation_gain}</div>
            </div>
            <div className="trail-info-block">
              <div className="trail-info-text">Route type</div>
              <div className="trail-info-value">{trail.route_type}</div>
            </div>
          </div>

          <div className="trail-tags-container">
            {this.tagsRender()}
          </div>

          <MenuBar trail={trail}/>
          {this.state.forecastArray ? <WeatherBar forecastArr={this.state.forecastArray} /> : null }
          <ReviewBar trail={trail} currentUser={this.props.currentUser} deleteReview={this.props.deleteReview} photos={this.props.photos}/>


        </div>
        <div className="trail-right-container">
          <div className="trail-right-flex">
            <div className="trail-map-container">
              <img src={trail.mapUrl} alt="" className="trail-map"/>
            </div>

            <div className="trail-right-index-container">
              <div className="trail-right-index-title">Nearby Trails</div>
              <div className="trail-right-index">
                <ul className="trail-right-list" id="trail-right-list">
                  {trails.map((trail, idx) => {
                    return(
                      <li key={'trail'+`${idx}`} className="trail-card-container">
                        <a href={`#/trail/${trail.id}`} className="trail-card">
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
                              <StarRatings rating={trail.avg_rating} starDimension="15px" starRatedColor="#f5d24b" starSpacing="2px" className='review-user-date'/>
                              <span className="top-num-reviews">({trail.num_reviews})</span>  
                            </div>
                            <div className="trail-card-time-container">
                              <span className="trail-card-length">Length: {trail.length}</span>
                              <span>&nbsp;•&nbsp;</span>
                              <span className="trail-card-time">Est. 3h 53m</span>
                            </div>
                          </div>
                        </a>
                      </li>
                    )
                  })}

                </ul>
              </div>
            </div>



          </div>
        </div>



      </div>
    </div>
    </div>
  }
}

export default Trail;