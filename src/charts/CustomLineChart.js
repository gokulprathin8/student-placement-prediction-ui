import React, { PureComponent } from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, BarChart, Bar, Cell,
} from 'recharts';

const data01 = [
  { name: 'Group A', value: 1382 }, { name: 'Group B', value: 680 },
];

const data02 = [
  { name: 'Group A', value: 2400 }, { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 }, { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 }, { name: 'Group F', value: 4800 },
];


const data = [
  {
    name: 'Page A', placed: 1230, unplaced: 800, amt: 2230,
  },
];
const data1 = [
  {
    name: '10th', marks: 8.4, amt: 10,
  },
  {
    name: '12th', marks: 7.95, amt: 10,
  },
  {
    name: 'B.Tech', marks: 7.97, amt: 10,
  },
];


const CustomLineChart = (props) => {
  return (
    <div>
      <Row>
        <Col>
          <div style={{ paddingLeft: "150px" }}>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="unplaced" fill="#8884d8" />
              <Bar dataKey="placed" fill="#82ca9d" />
            </BarChart>
          </div>
          <h4 style={{ textAlign: "center" }}>Placed vs Non-Placed</h4>

        </Col>
        <br /><br /><br /><br />
        <Row>
          <Col>
            <div style={{ width: "100%", paddingLeft: "60px" }}>
              <BarChart
                width={700}
                height={500}
                data={data1}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="marks" fill="orange" />
              </BarChart>
            </div>
            <h4 style={{ textAlign: "center " }}> Comparasion of averages</h4>
          </Col>
        </Row>
        <Row>
          <Col>
          <div style={{ textAlign: "center", paddingLeft: "60%" }}>
            <PieChart width={400} height={400}>
              <Pie dataKey="value" isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
              <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
              <Tooltip />
            </PieChart>
            <h5 style={{  }}>Android vs NOT Android</h5>
            </div>
          </Col>
          
        </Row>


      </Row>

    </div>
  );
}

export default CustomLineChart;