import React from "react";
import { Link } from "react-router-dom";
// w
class Breadcrumb extends React.Component {

  trailNameRender() {
    const {item} = this.props;
    if (!item.trail_name) {
      return <div className="breadcrumb-container">

        <div className="breadcrumb-country breadcrumb-link">{item.country}</div>
        <span>&nbsp; › &nbsp;</span>
        <div className="breadcrumb-state breadcrumb-link">{item.state}</div>
        <span>&nbsp; › &nbsp;</span>
        <div className="breadcrumb-name breadcrumb-link">{item.park_name}</div>

      </div>
    } else {
      return <div className="breadcrumb-container">

        <div className="breadcrumb-country breadcrumb-link">{item.country}</div>
        <span>&nbsp; › &nbsp;</span>
        <div className="breadcrumb-state breadcrumb-link">{item.state}</div>
        <span>&nbsp; › &nbsp;</span>
        <div className="breadcrumb-name breadcrumb-link">{item.park_name}</div>
        <span>&nbsp; › &nbsp;</span>
        <div className="breadcrumb-trail-name breadcrumb-link">{item.trail_name}</div>
      
      </div>
    }
  }

  render() {
    return this.trailNameRender()
  }
}

export default Breadcrumb;