import gitamx from "../../apis/gitamx";
import {
    FETCH_JOBS
} from "./types";

export const fetchJobs = () => async (dispatch) => {
    const response = await gitamx.get("/jobs/")
    dispatch({
        type: FETCH_JOBS,
        payload: response.data,
    });
}