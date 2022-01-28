import React from "react";
import Breadcrumb from "../park/breadcrumb";
import { Link } from "react-router-dom";
import MenuBar from "../menubar/menu_bar";
import WeatherBar from "../menubar/weather_bar";
import { fetchWeather } from "../../util/weather_api_util";

class Trail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      forecastArray: ''
    }
  }

  componentDidMount() {
    this.props.fetchTrail(this.props.match.params.trailId)
      .then(() => this.weatherCall())
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
  
  render() {
    if (!this.props.trail) return null;
    const {trail} = this.props;

    return <div className="trail-bg-color">
    <div className="trail-container">
      <div className="trail-search-component">
        <Breadcrumb item={trail} />
        <form className='park-search-form'>
          <input type="text" className="park-search-bar" placeholder="Enter park or trail name"/>
          <button className='park-search-button'>
          </button>
        </form>
      </div>

      <div className="trail-photo-info-container">
        <div className="trail-photo-bar">
        </div>
        <div className="trail-photo-info"> 
          <h1 className="trail-photo-title">{trail.trail_name}</h1>
          <div className="trail-rating-diff">
            <span className="trail-difficulty">hard</span>
            <span className="trail-stars">
              <span className="fa fa-star checked star"></span>
              <span className="fa fa-star checked star"></span>
              <span className="fa fa-star checked star"></span>
              <span className="fa fa-star checked star"></span>
              <span className="fa fa-star star"></span>
            </span>
          </div>
          <Link className="trail-park-name" to={`/park/${trail.park_id}`}>{trail.park_name}</Link>
        </div>
        <div className="trail-photo-buttons">
          <ul className="trail-button-photo-uo">
            <li className="trail-button-photo trail-photo-li">
              <a href="" className="trail-button-photo-a">
                <div className="trail-button-icon-container">
                  <div className="trail-button-photo-icon"></div>
                </div>
                <span className="trail-button-photo-text">Photos (12,423)</span>
              </a>
            </li>
            <li className="trail-button-directions trail-photo-li">
              <a href="" className="trail-button-photo-a">
                <div className="trail-button-icon-container">
                  <div className="trail-button-dir-icon"></div>
                </div>
                <span className="trail-button-photo-text">Directions</span>
              </a>
            </li>
            <li className="trail-button-print trail-photo-li">
              <a href="" className="trail-button-photo-a">
                <div className="trail-button-icon-container">
                  <div className="trail-button-print-icon"></div>
                </div>
                <span className="trail-button-photo-text">Print/PDF</span>
              </a>
            </li>
            <li className="trail-button-share trail-photo-li">
              <a href="" className="trail-button-photo-a">
                <div className="trail-button-icon-container">
                  <div className="trail-button-share-icon"></div>
                </div>
                <span className="trail-button-photo-text">Share</span>
              </a>
            </li>
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
        </div>


        <div className="trail-right-container">
          placeholder
        </div>



      </div>

    </div>






    </div>
  }
}

export default Trail;