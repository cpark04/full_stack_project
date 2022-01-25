import { connect } from "react-redux";
import Home from "./home";
import { fetchParks } from "../../actions/park_actions";

const mSTP = (state) => {
  return {
    parks: Object.values(state.entities.parks)
  };
};

const mDTP = (dispatch) => {
  return {
    fetchParks: () => dispatch(fetchParks())
  };
};

export default connect(mSTP, mDTP)(Home);

