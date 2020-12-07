import { combineReducers } from "redux";
import jobsReducer from "./jobsReducer";
import facultyReducer from "./staffReducer";
import learningResourceReducer from "./learningResourceReducer";
import feedbackReducer from "./feedbackReducer";

export default combineReducers({
    jobs: jobsReducer,
    staff: facultyReducer,
    learningResources: learningResourceReducer,
    feedback: feedbackReducer,
});