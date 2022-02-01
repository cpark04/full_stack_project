import { FormControl, InputLabel, Select, Stack } from "@mui/material";
import React from "react";
import StarRatings from "react-star-ratings";
import DatePicker from 'react-date-picker';



class CreateReviewForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.currentUser,
      trail_id: this.props.trail.id,
      rating: 0,
      comment: '',
      review_date: '',
    }
    this.changeRating = this.changeRating.bind(this)
    this.handleClick = this.handleClick.bind(this)

  }

  changeRating(newRating) {
    this.setState({
      rating: newRating
    });
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value})
      console.log(this.state.comment)
    }
  }

  handleClick(e, condition) {
    e.preventDefault();
    if (condition === 'next') {
      let modal = document.getElementById('modal-step-1')
      modal.classList.add('hidden')
      let modal2 = document.getElementById('modal-step-2')
      modal2.classList.remove('hidden')
    }
  }

  handleDate (value) {
    return (e) => {
      this.setState({review_date: value})
      console.log(this.state)
    }
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
        <form className="create-form-act-condition-form">
          <div className="create-form-act-container">
            <div className="create-form-activity-selectors">
              <div className="selector-root">
              <DatePicker onChange={this.handleDate} />
              </div>
                      


            </div>
          </div>
        </form>
      </div>
      
    </div>
  }
}

export default CreateReviewForm;