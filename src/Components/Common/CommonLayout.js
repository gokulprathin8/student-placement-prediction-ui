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

const CommonLayout = () => {
    return (
        <HeaderFooter isLoggedin="true">
          <Jumbotron>
  <h1>Welcome to Student Placement</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
</Jumbotron>
          <div style={{ padding: "20px" }}></div>
<div style={{ padding: "20px" }}></div>
        <Tabs defaultTab="vertical-tab-one" vertical>
        <TabList>
          <Tab tabFor="vertical-tab-one">Home</Tab>
          <Tab tabFor="vertical-tab-two">Jobs</Tab>
          <Tab tabFor="vertical-tab-three">Notifications</Tab>
          <Tab tabFor="vertical-tab-four">Learning Resources</Tab>
          <Tab tabFor="vertical-tab-five">Faculty</Tab>
          <Tab tabFor="vertical-tab-six">Current Scores</Tab>
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
      </Tabs>
        </HeaderFooter>
    )
}

export default CommonLayout;