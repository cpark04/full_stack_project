import React from "react";
import Breadcrumb from "./breadcrumb";

class Park extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchPark(this.props.match.params.parkId);
  }

  render() {
    if (!this.props.park) return null;
    const {park} = this.props;

    return <div className="park-container">

      <div className="park-search-component">
        <Breadcrumb park={park} />
        <form className="park-search-bar">
          <input type="text" />
          <button>submit</button>
        </form>
      </div>

      <div className="park-trail-photos">
        
      </div>

      <div className="park-module">
        <div className="park-title-info">
          <p className="park-title">Best Trails in {park.park_name}</p>
          <div className="park-review">
            <div className="park-stars">
              <span class="fa fa-star checked star"></span>
              <span class="fa fa-star checked star"></span>
              <span class="fa fa-star checked star"></span>
              <span class="fa fa-star checked star"></span>
              <span class="fa fa-star star"></span>
            </div>
            <div className='park-review-text'>1032 Reviews</div>
          </div>
        </div>

        <div className="park-summary">
          <div className="park-intro">{park.intro}</div>
          <div className="park-text-description">Description</div>
          <div className="park-description">{park.description}</div>
        </div>

        <div className="park-map-container">
          <img src={park.mapUrl} alt="" className="park-map"/>
          <div className="dir-print-share-container">
            <a href={`https://www.google.com/maps/dir/Current+Location/${park.latitude},${park.longitude}`} className="park-dir" target="_blank">DIR</a>
            <a className="park-print"></a>
            <a className="park-share"></a>
          </div>
        </div>
        
        <div className="park-trail-index"></div>
      </div>
    </div>
  }
}

export default Park;