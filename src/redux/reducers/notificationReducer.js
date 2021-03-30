import {
    FETCH_NOTIFICATION
} from "../actions/types";

const notificationReducer =  (
    state = {notificationList: {}},
    action
) => {
    switch (action.type) {
        case FETCH_NOTIFICATION:
            return { ...state, notificationList: action.payload }
        default:
            return state;
    }
}

export default notificationReducer;
