import React from "react";

class Breadcrumb extends React.Component {

  render() {
    const {park} = this.props
    return <div className="breadcrumb-container">
      <div className="breadcrumb-country">{park.country}</div>
      <span>&nbsp; › &nbsp;</span>
      <div className="breadcrumb-state">{park.state}</div>
      <span>&nbsp; › &nbsp;</span>
      <div className="breadcrumb-name">{park.park_name}</div>

    </div>
  }
}

export default Breadcrumb;