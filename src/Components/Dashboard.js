import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
import './dashboard.css';
import chartData from './ChartData.json';

function Dashboard() {
  return (
    <div className="dashboard-container">
        <h1 className='top'>Charts</h1>
    <div className="charts-container">
      <div className="chart">
        <h1>Investment vs Revenue Chart</h1>
        <LineChart width={600} height={300} data={chartData}>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="investment" stroke="#8884d8" strokeWidth={3} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="revenue" stroke="#82ca9d" strokeWidth={3} />
        </LineChart>
      </div>
      <div className="chart">
        <h1>Revenue graph</h1>
        <LineChart width={600} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={3} activeDot={{ r: 8 }} />
        </LineChart>
      </div>

      <div className="chart">
        <h1>Month vs Sell Chart</h1>
        <BarChart width={600} height={300} data={chartData}>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <Legend />
          <Bar dataKey="sell" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
