import {
    POST_ASSIGNMENTS
} from "../actions/types";

const assignmentsReducer = (state = {assignmentsList: {}}, action) => {
    switch (action.type) {
        case POST_ASSIGNMENTS:
            return { ...state, [action.payload.id]: action.payload }
        default:
            return state
    }
};

export default assignmentsReducer;
