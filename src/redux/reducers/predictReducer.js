import {
    PREDICT
} from "../actions/types";

export default (
    state = {predict:{}}, action
) => {
    switch (action.type) {
        case PREDICT:
            return { ...state, predict: action.payload }
        default:
            return state
    }
};
