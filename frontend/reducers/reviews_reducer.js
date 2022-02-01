import { RECEIVE_ALL_PARKS } from "../actions/park_actions";
import { RECEIVE_REVIEW } from "../actions/review_actions";

const ReviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    
    switch (action.type) {
        case RECEIVE_REVIEW:
            newState[action.review.id] = action.review
            return newState;
        default:
            return state;
    }
}

export default ReviewsReducer;