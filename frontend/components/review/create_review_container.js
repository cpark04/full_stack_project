import { connect } from "react-redux";
import CreateReviewForm from "./create_review_form";


const mSTP = (state) => {
  return {
    currentUser: state.session.id
  }
}

export default connect(mSTP, mDTP)(CreateReviewForm);