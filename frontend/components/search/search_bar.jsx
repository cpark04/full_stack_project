import React from "react";

// const SearchBar = ({ options, value, multiple, disabled }) => {
  
  
  
  // return <div className="search-container">
  //   <p>Find your next Trail</p>
  //   <div className='search-form'>
  //     <input type="text" className="search-bar" placeholder="Search by park or trail name"/>
  //     <button className='search-button'>
  //       <img src="https://cdn-assets.alltrails.com/assets/packs/73160f92adaa640e4b1e.svg" alt="icon"></img>
  //     </button>
  //   </div>

  // </div>
// }

  


// export default SearchBar;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      params: '',
      parks: this.props.parks,
      trails: this.props.trails
    }
  }

  handleParams(e) {
    this.setState({params: e.target.value})
  }

  render() {
    return <div className="search-container">
      <p>Find your next Trail</p>
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

    </div>
  }
}