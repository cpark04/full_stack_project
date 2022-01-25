import React from "react";
import { Link } from "react-router-dom";

class Breadcrumb extends React.Component {

  render() {
    const {park} = this.props
    return <div className="breadcrumb-container">

      <div className="breadcrumb-country breadcrumb-link">{park.country}</div>
      <span>&nbsp; › &nbsp;</span>
      <div className="breadcrumb-state breadcrumb-link">{park.state}</div>
      <span>&nbsp; › &nbsp;</span>
      <div className="breadcrumb-name breadcrumb-link">{park.park_name}</div>

    </div>
  }
}

export default Breadcrumb;