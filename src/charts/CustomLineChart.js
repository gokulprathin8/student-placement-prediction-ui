import React, { PureComponent } from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, BarChart, Bar, Cell,
} from 'recharts';

const data01 = [
  { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
];

const data02 = [
  { name: 'Group A', value: 2400 }, { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 }, { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 }, { name: 'Group F', value: 4800 },
];


const data = [
  {
    name: 'Page A', placed: 4000, unplaced: 2400, amt: 2400,
  },
];
const data1 = [
  {
    name: 'Page A', uv: 4000, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, amt: 2290,
  },
];


const CustomLineChart = (props) => {
  return (
    <div>
      <Row>
        <Col>
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
          <h4 style={{ paddingLeft: "140px" }}>Placed vs Non-Placed</h4>
        </Col>
        <Row>
          <PieChart width={400} height={400}>
            <Pie dataKey="value" isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
            <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
            <Tooltip />
          </PieChart>
          <h8>Students familiar with Android vs Students not familiar with Android</h8>
          <PieChart width={400} height={400}>
            <Pie dataKey="value" isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
            <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
            <Tooltip />
          </PieChart>

          <PieChart width={400} height={400}>
            <Pie dataKey="value" isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
            <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
            <Tooltip />
          </PieChart>

          <PieChart width={400} height={400}>
            <Pie dataKey="value" isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
            <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
            <Tooltip />
          </PieChart>

        </Row>
        <BarChart
          width={500}
          height={300}
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
          <Bar dataKey="uv" fill="orange" />
        </BarChart>
        <h4 > Comparasion of averages</h4>
      </Row>

    </div>
  );
}

export default CustomLineChart;