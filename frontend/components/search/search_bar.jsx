import React from "react";

class SearchBar extends React.Component {

  render() {
    return <div className="search-container">
      <p>Find your next Trail</p>
      <input type="text" className="search-bar" placeholder="Search by park or trail name"/>
    </div>
  }
}

export default SearchBar;