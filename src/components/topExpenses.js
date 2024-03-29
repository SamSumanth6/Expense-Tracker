import './topExpenses.css';
import React from 'react';
import Example from './barChart'; // Assuming your chart component is named 'Chart'

const TopExpenses = () => {
  return (
    <div className='TE'>
      <h2 className='heading'>Top Expenses</h2>
      <div className='topExp-div'>
        <Example />  {/* Add the chart component here */}
      </div>
    </div>
  );
};

export default TopExpenses;
