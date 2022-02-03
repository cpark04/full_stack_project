import React from "react";
import { withRouter } from "react-router-dom";

class TrailSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      params: '',
      parks: this.props.parks,
      trails: this.props.trails
    }
    this.handleParams = this.handleParams.bind(this)
    this.handlePath = this.handlePath.bind(this)
    document.addEventListener('click', this.hide.bind(this))
  }

  handleParams(e) {
    this.setState({params: e.target.value})
  }

  hide(e) {
    console.log(e)
    const dropdown = document.getElementById('search-dropdown')
    if (e.target.className === 'search-bar') {
      dropdown.classList.remove('hide')
    } else if (dropdown) {
      dropdown.classList.add('hide')
    }
  }

  handlePath(id, type) {
    type === "park" ? this.props.history.push(`/park/${id}`) : this.props.history.push(`/trail/${id}`)
  }

  render() {

    const {parks, trails} = this.props

    return <div className="search-container">
      <div className='search-form'>
        <input 
          type="text" 
          className="search-bar" 
          placeholder="Search by park or trail name"
          onChange={this.handleParams}
        />
        <button className='search-button'>
          <img src="https://cdn-assets.alltrails.com/assets/packs/73160f92adaa640e4b1e.svg" alt="icon"></img>
        </button>
      </div>
      <div className='search-dropdown hide' id='search-dropdown'>
        {parks.map((park, idx) => {
          if (park.park_name.toLowerCase().startsWith(this.state.params.toLowerCase())) {
            return <div key={'park'+`${idx}`} className="park-search-container">
              <li className="park-search-button" onClick={() => this.handlePath(park.id, 'park')}>
                <div className="park-search-img">
                  <img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/buttons/park.png" />
                </div>
                <div className="park-search-info">
                  <h1>{park.park_name}</h1>
                  <p>{park.state}, {park.country}</p>
                </div>
              </li>
            </div>
          }
        })}

        {trails.map((trail, idx) => {
          if (trail.trail_name.toLowerCase().startsWith(this.state.params.toLowerCase())) {
            return <div key={'trail'+`${idx}`} className="park-search-container">
              <li className="park-search-button" onClick={() => this.handlePath(trail.id, 'trail')}>
                <div className="park-search-img">
                  <img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/buttons/trails.png" />
                </div>
                <div className="park-search-info">
                  <h1>{trail.trail_name}</h1>
                  <p>{trail.state}, {trail.country}</p>
                </div>
              </li>
            </div>
          }
        })}
      </div>
      


    </div>
  }
}

export default withRouter(TrailSearchBar)