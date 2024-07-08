import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartComponent = ({ expenses }) => {
  const processData = (expenses) => {
    const dataByDate = {};
    
    expenses.forEach(expense => {
      if (!dataByDate[expense.date]) {
        dataByDate[expense.date] = { date: expense.date, Food: 0, Entertainment: 0, Travel: 0 };
      }
      dataByDate[expense.date][expense.category] += expense.amount;
    });
    
    return Object.values(dataByDate);
  };

  const data = processData(expenses);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Food" stackId="a" fill="#8884d8" />
        <Bar dataKey="Entertainment" stackId="a" fill="#82ca9d" />
        <Bar dataKey="Travel" stackId="a" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
