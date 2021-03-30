import {
    PREDICT
} from "../actions/types";

const predictReducer =  ( state = {predict:{}}, action ) => {
    switch (action.type) {
        case PREDICT:
            return { ...state, predict: action.payload }
        default:
            return state
    }
};

export default predictReducer;
