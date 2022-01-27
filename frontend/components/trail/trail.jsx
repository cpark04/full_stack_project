import React from "react";

class Trail extends React.Component {

  componentDidMount() {
    this.props.fetchTrail(this.props.match.params.trailId);
  }
  
  render() {
    return <div>hello</div>
  }
}

export default Trail;