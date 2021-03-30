import {
    CURRENT_SCORES
} from "../actions/types";

const currentScoresReducer =  ( state = {currentScoresList: {}}, action ) => {
    switch (action.type) {
        case CURRENT_SCORES:
            return { ...state, currentScoresList: action.payload }
        default:
            return state;
    }
}

export default currentScoresReducer;
