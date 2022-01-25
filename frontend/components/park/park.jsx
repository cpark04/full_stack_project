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

      <div className="park-title">
        Best Trails in {park.park_name}
      </div>

      <div className="park-info"></div>
      
      <div className="park-trail-index"></div>
    </div>
  }
}

export default Park;