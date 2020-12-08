import {
    FETCH_NOTIFICATION
} from "../actions/types";

export default (
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
