import gitamx from "../../apis/gitamx";
import {
    FETCH_LEARNING_RESOURCES
} from "./types";

export const fetchLearningResources = () => async (dispatch) => {
    const response = await gitamx.get("/learningResources/")
    dispatch({
        type: FETCH_LEARNING_RESOURCES,
        payload: response.data,
    });
}