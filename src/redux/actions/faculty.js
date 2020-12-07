import gitamx from "../../apis/gitamx";
import {
    FETCH_FACULTY
} from "./types";

export const fetchFaculty = () => async (dispatch) => {
    const response = await gitamx.get("/staff/")
    dispatch({
        type: FETCH_FACULTY,
        payload: response.data,
    });
}