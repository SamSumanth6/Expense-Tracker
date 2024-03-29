import './App.css';
import React, { useState, useEffect } from 'react';
import HeroSection from './components/heroSection';
import TopExpenses from './components/topExpenses';
import Transactions from './components/transactions';

function App() {
  const [transactionsData, setTransactionsData] = useState([]);

  useEffect(() => {
    const storedTransactionsData = localStorage.getItem('transactionsData');
    if (storedTransactionsData) {
      setTransactionsData(JSON.parse(storedTransactionsData));
    }
  }, []);

  const updateTransactionsData = (newTransaction) => {
    const updatedTransactions = [...transactionsData, newTransaction];
    setTransactionsData(updatedTransactions);
    localStorage.setItem('transactionsData', JSON.stringify(updatedTransactions));
  };

  return (
    <div className="App">
      <h1 className='heading'>Expense Tracker</h1>
      <HeroSection transactionsData={transactionsData} updateTransactionsData={updateTransactionsData} />
      <div className='bottom-section'>
        <Transactions transactionsData={transactionsData} setTransactionsData={setTransactionsData} />
        <TopExpenses />
      </div>
    </div>
  );
}

export default App;
