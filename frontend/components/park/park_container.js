import { connect } from "react-redux";
import Park from "./park";
import {fetchPark, fetchParks} from "./../../actions/park_actions"
import {fetchTrails} from "./../../actions/trail_actions"

const mSTP = (state, ownProps) => {
  return {
    park: state.entities.parks[ownProps.match.params.parkId],
    trails: Object.values(state.entities.trails),
    parks: Object.values(state.entities.parks),
  }
}

const mDTP = (dispatch) => {
  return {
    fetchPark: (parkId) => dispatch(fetchPark(parkId)),
    fetchParks: () => dispatch(fetchParks()),
    fetchTrails: () => dispatch(fetchTrails())
  }
}

export default connect(mSTP, mDTP)(Park);