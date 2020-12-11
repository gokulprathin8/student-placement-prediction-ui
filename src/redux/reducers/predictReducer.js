import {
    PREDICT
} from "../actions/types";

export default (
    state = {predictList: {}}, action
) => {
    switch (action.type) {
        case PREDICT:
            return { ...state, [action.payload.id]: action.payload }
        default:
            return state
    }
};
