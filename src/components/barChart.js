import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  ];

class Chart extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={900} height={280} data={data}>  
          <CartesianGrid strokeDasharray="3 3" />  
          <XAxis tickLine={false} axisLine={false} /> 
          <Bar dataKey="uv" fill="#8884d8" />
          <Tooltip />
          <Legend />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export default Chart;
