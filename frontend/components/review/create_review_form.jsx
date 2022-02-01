import React from "react";
import StarRatings from "react-star-ratings";

class CreateReviewForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.currentUser,
      trail_id: this.props.trail.id,
      rating: '',
      comment: '',
      review_date: '',
    }
    this.changeRating = this.changeRating.bind(this)
  }

  changeRating(newRating) {
    this.setState({
      rating: newRating
    });
    console.log(this.state.rating)
  }

  render() {
    return <div>
      <div className="create-form-title-container">
        <div className="create-form-title">{this.props.trail.trail_name}</div>
        <div className="create-form-steps">Step 1 of 2</div>
        <form action="create-form-rating-comment-form">
          <div className="create-form-rating-comment-container">
            <div className="create-form-rating-container">
              <StarRatings changeRating={this.changeRating}/>
            </div>
            <textarea className="create-form-comment"></textarea>
          </div>
          <div className="create-form-button-container"></div>
        </form>
      </div>
    </div>
  }
}

export default CreateReviewForm;