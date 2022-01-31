import { connect } from "react-redux";
import Home from "./home";
import { fetchParks } from "../../actions/park_actions";
import { fetchTrails } from "../../actions/trail_actions"

const mSTP = (state) => {
  return {
    parks: Object.values(state.entities.parks),
    trails: Object.values(state.entities.trails)
  };
};

const mDTP = (dispatch) => {
  return {
    fetchParks: () => dispatch(fetchParks()),
    fetchTrails: () => dispatch(fetchTrails())
  };
};

export default connect(mSTP, mDTP)(Home);

