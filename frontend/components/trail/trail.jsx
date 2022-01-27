import React from "react";
import Breadcrumb from "../park/breadcrumb";

class Trail extends React.Component {

  componentDidMount() {
    this.props.fetchTrail(this.props.match.params.trailId);
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
          <div className="trail-rating-diff">hard rating</div>
          <div className="trail-photo-park-name">{trail.park_name}</div>
        </div>
        <div className="trail-photo-buttons">
          <ul className="trail-button-uo-list">
            <li className="trail-button-photo"></li>
            <li className="trail-button-directions"></li>
            <li className="trail-button-print"></li>
            <li className="trail-button-share"></li>
          </ul>
        </div>
      </div>
    </div>






    </div>
  }
}

export default Trail;