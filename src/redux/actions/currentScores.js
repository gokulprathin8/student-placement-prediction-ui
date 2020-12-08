import gitamx from "../../apis/gitamx";
import {
    CURRENT_SCORES
} from "./types";

export const currentScores = () => async (dispatch) => {
    const response = await gitamx.get("/student/")
    dispatch({
        type: CURRENT_SCORES,
        payload: response.data,
    });
}
