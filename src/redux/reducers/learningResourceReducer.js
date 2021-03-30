import {
    FETCH_LEARNING_RESOURCES
} from "../actions/types";

const learningResourceReducer = ( state = {learningList: {}}, action ) => {
    switch (action.type) {
        case FETCH_LEARNING_RESOURCES:
            return { ...state, learningList: action.payload }
        default:
            return state;
    }
}

export default learningResourceReducer;