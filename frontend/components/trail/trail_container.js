import { connect } from "react-redux";
import Trail from "./trail";
import { fetchTrail, fetchTrails } from "../../actions/trail_actions";


const mSTP = (state, ownProps) => {
  return {
    trail: state.entities.trails[ownProps.match.params.trailId],
    trails: Object.values(state.entities.trails),
    currentUser: state.session.id
    // reviews: state.entities.trails[ownProps.match.params.trailId].reviews
  }
}

const mDTP = (dispatch) => {
  return {
    fetchTrail: (trailId) => dispatch(fetchTrail(trailId)),
    fetchTrails: () => dispatch(fetchTrails())

  }
}

export default connect(mSTP, mDTP)(Trail);