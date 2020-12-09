import {
    POST_ASSIGNMENTS
} from "../actions/types";

export default (
    state = {assignmentsList: {}}, action
) => {
    switch (action.type) {
        case POST_ASSIGNMENTS:
            return { ...state, [action.payload.id]: action.payload }
        default:
            return state
    }
};
