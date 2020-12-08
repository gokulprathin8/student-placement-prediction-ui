import gitamx from "../../apis/gitamx";
import {
    POST_FEEDBACK
} from "./types";

export const postFeedback = (value) => async (dispatch) => {
    const response = await gitamx.post("/feedback/", value )
    dispatch({
        type: POST_FEEDBACK,
        payload: response.data,
    });
}
