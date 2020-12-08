import gitamx from "../../apis/gitamx";
import {
    FETCH_NOTIFICATION
} from "./types";

export const fetchNotifications = () => async (dispatch) => {
    const response = await gitamx.get("/notification/")
    dispatch({
        type: FETCH_NOTIFICATION,
        payload: response.data,
    });
}
