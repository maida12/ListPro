import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Reports.css';
import Sidebar from './Sidebar';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Report = () => {
  const [tasks, setTasks] = useState([]);
  const [donePercentage, setDonePercentage] = useState(0);
  const [inProgressPercentage, setInProgressPercentage] = useState(0);
  const [todoPercentage, setTodoPercentage] = useState(0);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('/api/alltasks');
        setTasks(response.data.tasks);
      } catch (error) {
        console.error('Fetch tasks error:', error);
      }
    };

    fetchTasks();
  }, []);

  useEffect(() => {
    const calculatePercentage = () => {
      const completedTasks = tasks.filter((task) => task.status === 3);
      const donePercentage = (completedTasks.length / tasks.length) * 100;
      const inProgressTasks = tasks.filter((task) => task.status === 2);
      const inProgressPercentage = (inProgressTasks.length / tasks.length) * 100;
      const todoTasks = tasks.filter((task) => task.status === 1);
      const todoPercentage = (todoTasks.length / tasks.length) * 100;
      setDonePercentage(donePercentage);
      setInProgressPercentage(inProgressPercentage);
      setTodoPercentage(todoPercentage);
    };

    calculatePercentage();
  }, [tasks]);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: '#ffff',
            padding: '5px',
            border: '1px solid #cccc',
          }}
        >
          <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
        </div>
      );
    }
    return null;
  };

  const data = [
    {
      name: 'Todo',
      value: todoPercentage,
    },
    {
      name: 'Done',
      value: donePercentage,
    },
    {
      name: 'In Progress',
      value: inProgressPercentage,
    },
  ];

  const COLORS = ['#973a8f', '#3b1c39', 'rgba(68, 25, 109, 0.623)'];

  return (
    <><Sidebar/>
    <div className="report-container">
      <div className="percentage-container">
        <div className="percentage-item">
          <span className="percentage-label">Todo:</span>
          <span className="percentage-value">{`${todoPercentage.toFixed(2)}%`}</span>
        </div>
        <div className="percentage-item">
          <span className="percentage-label">Done:</span>
          <span className="percentage-value">{`${donePercentage.toFixed(2)}%`}</span>
        </div>
        <div className="percentage-item">
          <span className="percentage-label">In Progress:</span>
          <span className="percentage-value">{`${inProgressPercentage.toFixed(2)}%`}</span>
        </div>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="70%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
    </>
  );
};

export default Report;
