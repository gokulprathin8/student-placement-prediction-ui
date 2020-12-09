import React, { PureComponent } from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie,BarChart, Bar, Cell,
} from 'recharts';

const data01 = [
  { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
];

const data02 = [
  { name: 'Group A', value: 2400 }, { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 }, { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 }, { name: 'Group F', value: 4800 },
];


const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
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
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
      <h4 style={{paddingLeft:"140px"}}>Placed vs Non-Placed</h4>
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
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
      <h4 > Comparasion of averages</h4>
      </Row>
      
    </div>
  );
}

export default CustomLineChart;