import gitamx from "../../apis/gitamx";
import {
    POST_FEEDBACK
} from "./types";

export const postFeedback = () => async (dispatch) => {
    const response = await gitamx.post("/feedback/")
    dispatch({
        type: POST_FEEDBACK,
        payload: response.data,
    });
}