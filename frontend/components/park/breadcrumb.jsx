import React from "react";
import { Link } from "react-router-dom";

class Breadcrumb extends React.Component {

  render() {
    const {park} = this.props
    return <div className="breadcrumb-container">

      <Link className="breadcrumb-country breadcrumb-link">{park.country}</Link>
      <span>&nbsp; › &nbsp;</span>
      <Link className="breadcrumb-state breadcrumb-link">{park.state}</Link>
      <span>&nbsp; › &nbsp;</span>
      <Link className="breadcrumb-name breadcrumb-link">{park.park_name}</Link>

    </div>
  }
}

export default Breadcrumb;