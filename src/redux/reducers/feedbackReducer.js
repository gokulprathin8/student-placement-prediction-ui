import {
    POST_FEEDBACK
} from "../actions/types";

const feedbackReducer = ( state = {feedbackList: {}}, action ) => {
    switch (action.type) {
        case POST_FEEDBACK:
            return { ...state, [action.payload.id]: action.payload }
        default:
            return state
    }
};

export default feedbackReducer;