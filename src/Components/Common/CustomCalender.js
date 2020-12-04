import React from "react";
import moment from "moment";
import Calendar from "react-full-event-calendar";

const events = [
    {
        startTime: new Date(moment().add(2, "hour")),
        endTime: new Date(moment().add(3, "hour")),
        title: "working in the weekend"
    },
    {
        startTime: new Date(moment().add(-3, "hour")),
        endTime: new Date(moment().add(-2, "hour")),
        title: "working in the weekend"
    },
    {
        startTime: new Date(),
        endTime: new Date(moment().add(1, "hour")),
        title: "working in the weekend"
    }
];


const CustomCalender = () => {
    return (
        <Calendar events={events} />
    );
}

export default CustomCalender;
