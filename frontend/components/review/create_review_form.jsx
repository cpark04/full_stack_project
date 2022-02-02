import React from "react";
import StarRatings from "react-star-ratings";
import { withRouter } from "react-router-dom";



class CreateReviewForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.currentUser,
      trail_id: this.props.trail.id,
      rating: 0,
      comment: '',
      review_date: '',
      conditions: []
    }
    this.changeRating = this.changeRating.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  changeRating(newRating) {
    this.setState({
      rating: newRating
    });
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value})
      console.log(this.state)
    }
  }

  handleCheckbox() {
    let checkboxes = Array.from(document.getElementsByClassName('checkbox-input'))

    let tagArr = [];
    checkboxes.forEach((input) => {
      if (input.checked) tagArr.push(input.value)
    })
    this.setState({conditions: tagArr})
    console.log(this.state.conditions)
  }

  handleClick(e, condition) {
    e.preventDefault();
    let modal = document.getElementById('modal-step-1')
    let modal2 = document.getElementById('modal-step-2')
    if (condition === 'next') {
      modal.classList.add('hidden')
      modal2.classList.remove('hidden')
    } else if (condition === 'back') {
      modal2.classList.add('hidden')
      modal.classList.remove('hidden')
    }
  }

  handleDate (value) {
    return (e) => {
      this.setState({review_date: value})
      console.log(this.state)
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log("handle submit", this.state)
    this.props.createReview(this.state)
    this.props.history.go(0)
  }

  render() {
    return <div>
      <div className="create-form-title-container" id="modal-step-1">
        <div className="create-form-title">{this.props.trail.trail_name}</div>
        <div className="create-form-steps">Step 1 of 2</div>
        <form action="create-form-rating-comment-form">
          <div className="create-form-rating-comment-container">
            <div className="create-form-rating-container">
              <StarRatings starHoverColor="#f5d24b" rating={this.state.rating} changeRating={this.changeRating} starDimension="35px" starSpacing="3px" starRatedColor="#f5d24b"/>
            </div>
            <textarea className="create-form-comment" onChange={this.handleChange('comment')} placeholder="Give back to the community. Share your thoughts about the trail so others know what to expect."></textarea>
          </div>
          <div className="create-form-button-container">
            <input type="submit" value="Next" className="create-form-next" onClick={(e) => this.handleClick(e, 'next')}/>
          </div>
        </form>
      </div>

      <div className="create-form-title-container hidden" id="modal-step-2">
        <div className="create-form-title">{this.props.trail.trail_name}</div>
        <div className="create-form-steps">Step 2 of 2</div>
        <form className="create-form-act-condition-form" onSubmit={this.handleSubmit}>
          <div className="create-form-act-container">
            <div className="form-activity-container">
              Date of Activity
            </div>
            <div className="selector-root">
              <div className="date-select-container">
                <div className="date-select-input-box">
                    <input type="date" id="date-select" onChange={this.handleChange('review_date')} />
                </div>
              </div>
            </div>
                      


          </div>
          <div className="review-conditions-container">
            <div className="review-conditions-title">Trail Conditions</div>
            <div className="review-conditions-checkbox-container">
              <div className="checkbox-container">
                <input onChange={this.handleCheckbox} type="checkbox" id="great" value="great" className="checkbox-input"/>
                <label htmlFor="great" >Great!</label>
              </div>
              <div className="checkbox-container">
                <input onChange={this.handleCheckbox} type="checkbox" id="blowdown" value="blowdown" className="checkbox-input"/>
                <label htmlFor="blowdown" >Blowdown</label>
              </div>
              <div className="checkbox-container">
                <input onChange={this.handleCheckbox} type="checkbox" id="bridge-out" value="bridge-out" className="checkbox-input"/>
                <label htmlFor="bridge-out" >Bridge out</label>
              </div>
              <div className="checkbox-container">
                <input onChange={this.handleCheckbox} type="checkbox" id="bugs" value="bugs" className="checkbox-input"/>
                <label htmlFor="bugs" >Bugs</label>
              </div>
              <div className="checkbox-container">
                <input onChange={this.handleCheckbox} type="checkbox" id="closed" value="closed" className="checkbox-input"/>
                <label htmlFor="closed" >Closed</label>
              </div>
              <div className="checkbox-container">
                <input onChange={this.handleCheckbox} type="checkbox" id="fee" value="fee" className="checkbox-input"/>
                <label htmlFor="fee" >Fee</label>
              </div>
              <div className="checkbox-container">
                <input onChange={this.handleCheckbox} type="checkbox" id="flooded" value="flooded" className="checkbox-input"/>
                <label htmlFor="flooded" >Flooded</label>
              </div>
              <div className="checkbox-container">
                <input onChange={this.handleCheckbox} type="checkbox" id="icy" value="icy" className="checkbox-input"/>
                <label htmlFor="icy" >Icy</label>
              </div>
              <div className="checkbox-container">
                <input onChange={this.handleCheckbox} type="checkbox" id="muddy" value="muddy" className="checkbox-input"/>
                <label htmlFor="muddy" >Muddy</label>
              </div>
              <div className="checkbox-container">
                <input onChange={this.handleCheckbox} type="checkbox" id="no-shade" value="no-shade" className="checkbox-input"/>
                <label htmlFor="no-shade" >No shade</label>
              </div>
              <div className="checkbox-container">
                <input onChange={this.handleCheckbox} type="checkbox" id="off-trail" value="off-trail" className="checkbox-input"/>
                <label htmlFor="off-trail" >Off trail</label>
              </div>
              <div className="checkbox-container">
                <input onChange={this.handleCheckbox} type="checkbox" id="over-grown" value="over-grown" className="checkbox-input"/>
                <label htmlFor="over-grown" >Over grown</label>
              </div>
              <div className="checkbox-container">
                <input onChange={this.handleCheckbox} type="checkbox" id="private-property" value="private-property" className="checkbox-input"/>
                <label htmlFor="private-property" >Private property</label>
              </div>
              <div className="checkbox-container">
                <input onChange={this.handleCheckbox} type="checkbox" id="rocky" value="rocky" className="checkbox-input"/>
                <label htmlFor="rocky" >rocky</label>
              </div>
              <div className="checkbox-container">
                <input onChange={this.handleCheckbox} type="checkbox" id="scramble" value="scramble" className="checkbox-input"/>
                <label htmlFor="scramble" >Scramble</label>
              </div>
              <div className="checkbox-container">
                <input onChange={this.handleCheckbox} type="checkbox" id="snow" value="snow" className="checkbox-input"/>
                <label htmlFor="snow" >Snow</label>
              </div>
              <div className="checkbox-container">
                <input onChange={this.handleCheckbox} type="checkbox" id="washed-out" value="washed-out" className="checkbox-input"/>
                <label htmlFor="washed-out" >Washed out</label>
              </div>
            </div>
          </div>
          <div className="create-form-button-container">
            <button className="back-button" onClick={(e) => this.handleClick(e, 'back')} >Back</button>
            <input type="submit" value="Post" className="create-form-post" />
          </div>
        </form>
      </div>
      
    </div>
  }
}

export default withRouter(CreateReviewForm)

