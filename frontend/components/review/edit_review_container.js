import { connect } from "react-redux";
import { updateReview } from "../../actions/review_actions";
import EditReviewForm from "./edit_review_form";


const mSTP = (state, ownProps) => {
  return {
    currentUser: state.session.id
  }
}

const mDTP = (dispatch) => {
  return {
    updateReview: (review) => dispatch(updateReview(review))
  }
}

export default connect(mSTP, mDTP)(EditReviewForm);