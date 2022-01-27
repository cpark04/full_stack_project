import { RECEIVE_ALL_TRAILS, RECEIVE_TRAIL } from "../actions/trail_actions";

const trailsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = (Object.assign({}, state));
    switch (action.type) {
        case RECEIVE_ALL_TRAILS:
            return action.trails;
        case RECEIVE_TRAIL:
            newState[action.trail.id] = action.trail;
            return newState;   
        default:
            return state;
    }
}

export default trailsReducer;