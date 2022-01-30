import React from "react";
import PhotoSlides from "./photo_slides";
import SearchBar from "../search/search_bar";
import TrailCards from "../trail_cards/trail_cards";
import { Link } from "react-router-dom";

class Home extends React.Component {

  componentDidMount() {
    this.props.fetchParks();
    this.props.fetchTrails();
  }

  render(){
    if (!this.props.parks) return null

    return <div className="home-page">
      
      <div className='bg-slides'>
        <PhotoSlides />
      </div>


      <div className='trail-cards'>
        <div className="spencer-container"><span className="spencer-click">SPENCER CLICK HEREEE!!! These are my temp park show links</span>
          {this.props.parks.map((park) => {
            return <div key={park.id}>
              <Link to={`/park/${park.id}`}>{park.park_name}</Link>
            </div>
          })}
        </div>
        <TrailCards />
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