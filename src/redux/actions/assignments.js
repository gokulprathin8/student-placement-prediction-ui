import gitamx from "../../apis/gitamx";
import {
    POST_ASSIGNMENTS
} from "./types";

export const postAssignment = (value) => async (dispatch) => {
    const response = await gitamx.post("/assignments/", value )
    dispatch({
        type: POST_ASSIGNMENTS,
        payload: response.data,
    });
}
