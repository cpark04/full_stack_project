import { connect } from "react-redux";
import Trail from "./trail";
import { fetchTrail } from "../../actions/trail_actions";

const mSTP = (state, ownProps) => {
  return {
    trail: state.entities.trails[ownProps.match.params.trailId]
  }
}

const mDTP = (dispatch) => {
  return {
    fetchTrail: (trailId) => dispatch(fetchTrail(trailId))
  }
}

export default connect(mSTP, mDTP)(Trail);