import './heroSection.css'
import { useState } from 'react';
import HeroChart from './heroCharts';

const  HeroSection = ()=>{
    const [incomeForm, setIncomeForm] = useState(false);
    const [expenseForm, setExpenseForm] = useState(false);
    const [isBlurred, setIsBlurred] = useState(false);


    const handleIncome = () => {
        setIsBlurred(true); // Apply blur effect
        setTimeout(() => {
          setIncomeForm(true);
        }, 300); // Delay opening form for smooth transition
      };

    const handleCloseForm = () => {
        setIncomeForm(false);
        setIsBlurred(false);
        // document.body.classList.remove('blurred'); // Remove blur class
      };

      const handleExpenses = () => {
        console.log("clicked on add expenses button");
        setExpenseForm(true);
        setIsBlurred(true); // Apply blur effect for expense form
        setTimeout(() => {
          setExpenseForm(true);
        }, 300); // Delay opening form for smooth transition
      };

    const handleExpensesCloseForm=()=>{
        setExpenseForm(false);
        setIsBlurred(false);
    }
    return(
        <div className="main-div">
            <div className='hero-sub-section'>
                <div className='wallet-div'>
                    <p className='wallet-subHeading'>Wallet Balance:<span className='money'> ₹4500</span></p>
                    <button className='wallet-btn' onClick={handleIncome}>+Add Income</button>
                    
                </div>
                <div className='expenses-div'>
                    <p className='expenses-subHeading'>Expenses:<span className='E-money'> ₹500</span></p>
                    <button className='expenses-btn' onClick={handleExpenses}>+Add Expense</button>
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
            {isBlurred && <div className="blurred-overlay"></div>} {/* Apply blur overlay conditionally */}
      {incomeForm && (
        <div className="income-form-container">
          <h2>Add Balance</h2>
          <form onSubmit={(e) => e.preventDefault()}> {/* Prevent form submission */}
            <input type="number" id="income" name="income" placeholder="Income Amount" required />
            <button type="submit" className="income-btn">
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
          <form onSubmit={(e) => e.preventDefault()}> {/* Prevent form submission */}
            {/* Add your expense form fields here */}
            <div>
              <input type="text" id="expense" name="expense" required placeholder="Title" />
              <input type="number" id="expense" name="expense" required placeholder="Price" />
            </div>
            <div>
              <input type="text" id="expense" name="expense" required placeholder="Select Category" />
              <input type="date" id="expense" name="expense" required placeholder="Date" />
            </div>
            <button type="submit" className="expense-btn">
              Add Expense
            </button>
            <button type="button" className="expense-btn-cancel" onClick={handleExpensesCloseForm}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
    )
}

export default HeroSection;
