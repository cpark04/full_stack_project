import { connect } from "react-redux";
import { updateReview } from "../../actions/review_actions";
import EditReviewForm from "./create_review_form";


const mSTP = (state, ownProps) => {
  console.log(ownProps)
  return {
    // currentUser: state.session.id,
  }
}

const mDTP = (dispatch) => {
  return {
    updateReview: (review) => dispatch(updateReview(review))
  }
}

export default connect(mSTP, mDTP)(EditReviewForm);