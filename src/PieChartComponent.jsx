import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

const PieChartComponent = ({ expenses }) => {
  const processData = (expenses) => {
    const dataByCategory = {
      Food: 0,
      Entertainment: 0,
      Travel: 0
    };
    
    expenses.forEach(expense => {
      dataByCategory[expense.category] += expense.amount;
    });

    return Object.keys(dataByCategory).map(category => ({
      name: category,
      value: dataByCategory[category]
    })).filter(item => item.value > 0); 
  };

  const data = processData(expenses);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, value }) => `${name}: ₹${value}`}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
