import { connect } from "react-redux";
import Review from "./review";


const mSTP = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.review.user_id]
  }
}

export default connect(mSTP, mDTP)(Park);