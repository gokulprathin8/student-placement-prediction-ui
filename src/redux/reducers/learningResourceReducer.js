import {
    FETCH_LEARNING_RESOURCES
} from "../actions/types";

export default (
    state = {learningList: {}},
    action
) => {
    switch (action.type) {
        case FETCH_LEARNING_RESOURCES:
            return { ...state, learningList: action.payload }
        default:
            return state;
    }
}