import React from "react";
import 'react-web-tabs/dist/react-web-tabs.css';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import Homepage from "../Main/Homepage";
import Jobs from "../Main/Jobs";
import Notifications from "../Main/Notifications";
import LearningResources from "../Main/LearningResources";
import Faculty from "../Main/Faculty";
import CurrentScores from "../Main/CurrentScores";
import HeaderFooter from ".";
import { Button, Jumbotron } from "react-bootstrap";
import Predict from "../Main/Predict";
import CustomCalender from "./CustomCalender";
import { Fade, Zoom } from "react-awesome-reveal";
import Feedback from "../Main/Feedback";
import Assignment from "../Main/Assignment";

const CommonLayout = () => {
    return (
        <HeaderFooter isLoggedin="true">



          <Jumbotron >
            <div style={{ textAlign: "center" }}>
            <Zoom triggerOnce><h1>Welcome to TnP Portal </h1></Zoom>
            <Fade triggerOnce>
            <p>
              Gain expertise, compare, compete and propell your skills with us.
            </p>
            </Fade>
            </div>
        </Jumbotron>
          <div style={{  }}></div>
        <Tabs defaultTab="vertical-tab-one" vertical>
        <TabList>
          <Tab tabFor="vertical-tab-one">Home</Tab>
          <Tab tabFor="vertical-tab-two">Jobs</Tab>
          <Tab tabFor="vertical-tab-three">Notifications</Tab>
          <Tab tabFor="vertical-tab-four">Learning Resources</Tab>
          <Tab tabFor="vertical-tab-five">Faculty</Tab>
          <Tab tabFor="vertical-tab-six">Current Scores</Tab>
          <Tab tabFor="vertical-tab-seven">Predict</Tab>
          <Tab tabFor="vertical-tab-eight">Feedback</Tab>
          <Tab tabFor="vertical-tab-nine">Assignments</Tab>
        </TabList>
        <TabPanel tabId="vertical-tab-one">
          <Homepage/>
        </TabPanel>
        <TabPanel tabId="vertical-tab-two">
          <Jobs/>
        </TabPanel>
        <TabPanel tabId="vertical-tab-three">
          <Notifications/>
        </TabPanel>
        <TabPanel tabId="vertical-tab-four">
          <LearningResources/>
        </TabPanel>
        <TabPanel tabId="vertical-tab-five">
          <Faculty/>
        </TabPanel>
        <TabPanel tabId="vertical-tab-six">
          <CurrentScores/>
        </TabPanel>
        <TabPanel tabId="vertical-tab-seven">
          <Predict/>
        </TabPanel>
        <TabPanel tabId="vertical-tab-eight">
          <Feedback/>
        </TabPanel>
        <TabPanel tabId="vertical-tab-nine">
          <Assignment/>
        </TabPanel>
      </Tabs>

      <div style={{ padding: "20px" }}> </div>

      <div style={{textAlign:"center"}}>

      <CustomCalender />
      </div>
      <div style={{ padding: "20px" }}> </div>
      

        </HeaderFooter>
    )
}

export default CommonLayout;