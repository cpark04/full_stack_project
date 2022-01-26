import React from "react";
import Breadcrumb from "./breadcrumb";

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

  componentDidMount(){
    this.props.fetchPark(this.props.match.params.parkId);
  }

  render() {
    if (!this.props.park) return null;
    const {park} = this.props;

    return <div className="park-container">

      <div className="park-search-component">
        <Breadcrumb park={park} />

        <form className='park-search-form'>
          <input type="text" className="park-search-bar" placeholder="Enter park or trail name"/>
          <button className='park-search-button'>
          </button>
        </form>

      </div>

      <div className="park-trail-photos">
        
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

            <a href={`https://www.google.com/maps/dir/Current+Location/${park.latitude},${park.longitude}`} className="park-dir" target="_blank">
              <div className="print-button"></div>
              <span>Print map</span>
            </a>

            <a href={`https://www.google.com/maps/dir/Current+Location/${park.latitude},${park.longitude}`} className="park-dir" target="_blank">
              <div className="share-button"></div>
              <span>Share</span>
            </a>
          </div>
        </div>

        <div className="park-information">
          
        </div>

        <div className="park-trail-index"></div>
      </div>
    </div>
  }
}

export default Park;