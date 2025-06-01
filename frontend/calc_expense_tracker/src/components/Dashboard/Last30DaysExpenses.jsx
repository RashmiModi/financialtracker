import React, { useEffect, useState } from 'react';
import {prepaExpenseBarChartData} from '../../utils/helper';
import CustomBarChart from '../Charts/CustomBarChart';

const Last30DaysExpenses = ({ data }) => {
  const [charData, setCharData] = useState([]);
console.log("data==",data)
  useEffect(() => {
    if (Array.isArray(data) && data.length > 0) {
      console.log('Data received in Last30DaysExpenses:', data);
      const result = prepaExpenseBarChartData(data);
      setCharData(result);
      console.log('Processed chart data:', result);
    } else {
      console.log('Invalid data received:', data);
    }
  }, [data]);

  return (
    <div className="card col-span-1">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Last 30 Days Expenses</h5>
      </div>
      <CustomBarChart data={charData} />
    </div>
  );
};

export default Last30DaysExpenses;
