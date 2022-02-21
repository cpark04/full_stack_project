# SomeTrails

## Live Link

[SomeTrails](https://some-trails.herokuapp.com/#/ "SomeTrails Home Page")

![CompleteHomepage](https://i.imgur.com/2SmAxI2.png)


## About

SomeTrails is a clone of AllTrails where users can browse through parks and the trails within them to gather general information. On the home page, there is a photo slider that showcases some of the trails where users can click on the photo-card they are interested in. The user will be redirected to the trail page where they can look up general information of the trail such as directions, facilities, contact information, etc. Users will also be able to create, read, update, and delete reviews and also upload their own photos.

SomeTrails backend is built using the Ruby on Rails framework, PostgreSQL, AWS S3 storage for photos used in the frontend. The frontend is built using React, Redux, and SCSS. jQuery is used to send all AJAX calls from the frontend to the backend..

## Features
### CRUD For Reviews

![CreateReview](app/assets/images/create_review.gif)

Users will be able to create/read/update/destroy reviews for trails. To create a review, a user simply has to click on the "Write Review" button and a 2-part modal form will popup. One the first page, user will select a rating and write their review. Once done, they can click the next button and select the date, trail condition tags and select the Post button to create the review.

The code below was created to search through the checkboxes to see if each box has an attribute of checked. If found, it setStates to the conditions array.

```javascript
handleCheckbox() {
  let checkboxes = Array.from(document.getElementsByClassName('checkbox-input'))

  let tagArr = [];
  checkboxes.forEach((input) => {
    if (input.checked) tagArr.push(input.value)
  })
  this.setState({conditions: tagArr})
}
```

![UpdateDestroyReview](app/assets/images/update_destroy_review1.gif)

Users will also be able to edit any of their reviews and freely change any of the parameters to their liking, including the trail condition tags.


### Search Bar

![SearchBar](app/assets/images/search_bar.gif)

Users can find a park or trail using the search bar in the middle of the home page. The search bar is actually just a text input that when clicked on, will reveal a hidden div below that has an index of all the trails/parks. When a user starts typing in the input box, it will filter out any trail/park that does not contain the letters being inputted. The code below shows the search function that filters the trails/parks.

```javascript
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
```