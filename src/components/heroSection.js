import './heroSection.css'
import { useState, useEffect } from 'react';
import HeroChart from './heroCharts';

const HeroSection = ({ transactionsData,updateTransactionsData, setTransactionsData }) => {
  const [incomeForm, setIncomeForm] = useState(false);
  const [expenseForm, setExpenseForm] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const [walletBalance, setWalletBalance] = useState(() => {
    const savedBalance = localStorage.getItem('walletBalance');
    return savedBalance ? parseInt(savedBalance) : 5000;
  });
  const [totalExpenses, setTotalExpenses] = useState(0);
  useEffect(() => {
    const expenses = transactionsData.reduce((total, transaction) => total + transaction.price, 0);
    setTotalExpenses(expenses);
  }, [transactionsData]);

  useEffect(() => {
    localStorage.setItem('walletBalance', walletBalance);
  }, [walletBalance]);

  const handleIncome = () => {
    setIsBlurred(true);
    setTimeout(() => {
      setIncomeForm(true);
    }, 300);
  };

  const handleCloseForm = () => {
    setIncomeForm(false);
    setIsBlurred(false);
  };

  const handleExpenses = () => {
    setExpenseForm(true);
    setIsBlurred(true);
    setTimeout(() => {
      setExpenseForm(true);
    }, 300);
  };

  const handleExpensesCloseForm = () => {
    setExpenseForm(false);
    setIsBlurred(false);
  };

  const handleIncomeSubmit = (amount) => {
    setWalletBalance(prevBalance => prevBalance + amount);
    handleCloseForm();
  };

  const [expenseTitle, setExpenseTitle] = useState('');
  const [expensePrice, setExpensePrice] = useState(0);
  const [expenseCategory, setExpenseCategory] = useState('');
  const [expenseDate, setExpenseDate] = useState('');

  const handleExpenseChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'expense':
        setExpenseTitle(value);
        break;
      case 'expensePrice':
        setExpensePrice(parseInt(value));
        break;
      case 'expenseCategory':
        setExpenseCategory(value);
        break;
      case 'expenseDate':
        setExpenseDate(value);
        break;
      default:
        break;
    }
  };

  const handleExpenseSubmit = (event) => {
    event.preventDefault();
  
    const newTransaction = {
      id: generateUniqueId(),
      title: expenseTitle,
      price: expensePrice,
      category: expenseCategory,
      date: expenseDate,
    };


    const updatedWalletBalance = walletBalance - totalExpenses;
    setWalletBalance(updatedWalletBalance);
    localStorage.setItem('walletBalance', updatedWalletBalance.toString());
  
    updateTransactionsData(newTransaction);
  
    setExpenseTitle('');
    setExpensePrice(0);
    setExpenseCategory('');
    setExpenseDate('');
  
    handleExpensesCloseForm();
  };

  const generateUniqueId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };
  
  
  

  return (
    <div className="main-div">
      <div className='hero-sub-section'>
        <div className='wallet-div'>
          <p className='wallet-subHeading'>Wallet Balance:<span className='money'> ₹{walletBalance - totalExpenses}</span></p>
          <button className='wallet-btn' onClick={handleIncome}>+ Add Income</button>
        </div>
        <div className='expenses-div'>
          <p className='expenses-subHeading'>Expenses:<span className='E-money'> ₹{totalExpenses}</span></p>
          <button className='expenses-btn' onClick={handleExpenses}>+ Add Expense</button>
        </div>
      </div>
      <div className='chart-div'>
        <HeroChart />
        <div className='labels'>
          <div>
            <div className='color1'></div>
            <p>Food</p>
          </div>
          <div>
            <div className='color2'></div>
            <p>Travel</p>
          </div>
          <div>
            <div className='color3'></div>
            <p>Entertainment</p>
          </div>
        </div>
      </div>
      {isBlurred && <div className="blurred-overlay"></div>}
      {incomeForm && (
        <div className="income-form-container">
          <h2>Add Balance</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="number" id="income" name="income" placeholder="Income Amount" required />
            <button type="submit" className="income-btn" onClick={(e) => handleIncomeSubmit(parseInt(e.target.form[0].value))}>
              Add Balance
            </button>
            <button type="button" className="income-btn-cancel" onClick={handleCloseForm}>
              Cancel
            </button>
          </form>
        </div>
      )}
      {expenseForm && (
        <div className="expense-form-container">
          <h2>Add Expenses</h2>
          <form onSubmit={handleExpenseSubmit}>
            <div>
              <input type="text" id="expense" name="expense" value={expenseTitle} onChange={handleExpenseChange} required placeholder="Title" />
              <input type="number" id="expensePrice" name="expensePrice" value={expensePrice} onChange={handleExpenseChange} required placeholder="Price" />
            </div>
            <div>
              <select id="expenseCategory" name="expenseCategory" value={expenseCategory} onChange={handleExpenseChange} required>
                <option value="">Select Category</option>
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
                <option value="Entertainment">Entertainment</option>
              </select>
              <input type="date" id="expenseDate" name="expenseDate" value={expenseDate} onChange={handleExpenseChange} required placeholder="Date" />
            </div>
            <button type="submit" className="expense-btn">Add Expense</button>
            <button type="button" className="expense-btn-cancel" onClick={handleExpensesCloseForm}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default HeroSection;
