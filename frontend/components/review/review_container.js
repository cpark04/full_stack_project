import { connect } from "react-redux";
import Review from "./review";
import {fetchPark} from "./../../actions/park_actions"

const mSTP = (state, ownProps) => {
  return {
    park: state.entities.parks[ownProps.match.params.parkId]
  }
}

const mDTP = (dispatch) => {
  return {
    fetchPark: (parkId) => dispatch(fetchPark(parkId))
  }
}

export default connect(mSTP, mDTP)(Park);