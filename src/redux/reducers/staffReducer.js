import {
    FETCH_FACULTY
} from "../actions/types";

export default (
    state = {facultyList: {}},
    action
) => {
    switch (action.type) {
        case FETCH_FACULTY:
            return { ...state, facultyList: action.payload }
        default:
            return state;
    }
}