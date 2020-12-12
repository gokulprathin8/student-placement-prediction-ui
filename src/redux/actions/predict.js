import gitamx from "../../apis/gitamx";
import {
    PREDICT
} from "./types";

export const postPredict = (value) => async (dispatch) => {
    const response = await gitamx.post("/predict/", value )
    dispatch({
        type: PREDICT,
        payload: response.data,
    });
    return response.data;
}
