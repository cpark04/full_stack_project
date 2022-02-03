import React from "react";
import SelectSearch from "react-select-search";

const SearchBar = ({ options, value, multiple, disabled }) => {
  
  
  
  return <div className="search-container">
    <p>Find your next Trail</p>
    <div className='search-form'>
      <input type="text" className="search-bar" placeholder="Search by park or trail name"/>
      <button className='search-button'>
        <img src="https://cdn-assets.alltrails.com/assets/packs/73160f92adaa640e4b1e.svg" alt="icon"></img>
      </button>
    </div>

  </div>
}

  


export default SearchBar;
// export default function SearchBar() {
  
//   const options = [
//       {name: 'Swedish', value: 'sv'},
//       {name: 'English', value: 'en'},
//       {name: 'Summer', value: 'en'},
//       {name: 'Frank', value: 'en'},
//       {name: 'John', value: 'en'},
//   ];
//   return(
//     <SelectSearch options={options} value="sv" name="language" placeholder="Choose your language" className="search-bar"/>
//   )
// }
