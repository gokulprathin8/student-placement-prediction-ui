import { combineReducers } from "redux";
import jobsReducer from "./jobsReducer";
import facultyReducer from "./staffReducer";
import learningResourceReducer from "./learningResourceReducer";
import feedbackReducer from "./feedbackReducer";
import notificationReducer from "./notificationReducer";
import currentScoresReducer from "./currentScoresReducer";
import assignmentsReducer from "./assignmentsReducer";
import predictReducer from "./predictReducer";

export default combineReducers({
    jobs: jobsReducer,
    staff: facultyReducer,
    learningResources: learningResourceReducer,
    feedback: feedbackReducer,
    notifications: notificationReducer,
    scores: currentScoresReducer,
    assignments: assignmentsReducer,
    predict: predictReducer,
});
