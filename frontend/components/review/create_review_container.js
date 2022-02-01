import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions";
import CreateReviewForm from "./create_review_form";


const mSTP = (state) => {
  return {
    currentUser: state.session.id
  }
}

const mDTP = (dispatch) => {
  return {
    createReview: (review) => dispatch(createReview(review))
  }
}

export default connect(mSTP, mDTP)(CreateReviewForm);