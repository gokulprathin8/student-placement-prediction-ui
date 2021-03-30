import {
    FETCH_FACULTY
} from "../actions/types";

const staffReducer =  ( state = {facultyList: {}}, action ) => {
    switch (action.type) {
        case FETCH_FACULTY:
            return { ...state, facultyList: action.payload }
        default:
            return state;
    }
}

export default staffReducer;