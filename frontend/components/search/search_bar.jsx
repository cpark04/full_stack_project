import React from "react";

class SearchBar extends React.Component {

  render() {
    return <div className="search-container">
      <p>Find your next Trail</p>
      <form className='search-form'>
        <input type="text" className="search-bar" placeholder="Search by park or trail name"/>
        <button className='search-button'>
          <img src="https://cdn-assets.alltrails.com/assets/packs/73160f92adaa640e4b1e.svg" alt="icon"></img>
        </button>
      </form>
    </div>
  }
}

export default SearchBar;