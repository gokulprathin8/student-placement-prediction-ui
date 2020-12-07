import {
    FETCH_JOBS
} from "../actions/types";

export default (
    state = {jobsList: {}},
    action
) => {
    switch (action.type) {
        case FETCH_JOBS:
            return { ...state, jobsList: action.payload }
        default:
            return state;
    }
}