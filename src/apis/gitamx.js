import axios from "axios";

export default axios.create({
    baseURL: 'https://student-placement-prediction-1.herokuapp.com/api',
})
