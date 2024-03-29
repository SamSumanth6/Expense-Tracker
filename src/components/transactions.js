import './transactions.css';
import { IoPizzaOutline } from "react-icons/io5";
import { FiGift } from "react-icons/fi";
import { MdModeOfTravel } from "react-icons/md";
import { useState } from 'react';

const Transactions = ({ transactionsData, setTransactionsData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; 
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(transactionsData.length / itemsPerPage);

  const paginatedTransactions = transactionsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const deleteTransaction = (id) => {
    const updatedTransactionsData = transactionsData.filter(transaction => transaction.id !== id);
    setTransactionsData(updatedTransactionsData);
    localStorage.setItem('transactionsData', JSON.stringify(updatedTransactionsData));
  };

  return (
    <div className="transactions">
      <h2 className="heading">Recent Transactions</h2>
      <div className="trans-div">
        <ul className='ul-items'>
          {paginatedTransactions.map((transaction) => (
            <li key={transaction.id} className='list-item'>
              <div className="transaction-details">
                <div className="item-info">
                  <div className='item-name'>
                    <div>
                      {transaction.category === 'Food' && <IoPizzaOutline />}
                      {transaction.category === 'Entertainment' && <FiGift />}
                      {transaction.category === 'Travel' && <MdModeOfTravel />}
                    </div>
                    <span className="item-name">{transaction.title}</span>
                  </div>
                  <div>
                    <span className="transaction-amount">
                      ₹{transaction.price ? transaction.price.toFixed(2) : 'N/A'}
                    </span>
                    <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
                  </div>
                </div>
                <span className="transaction-date">
                  {new Date(transaction.date).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
              </div>
              <hr className="transaction-divider" />
            </li>
          ))}
        </ul>
        {totalPages > 1 && (
          <div className="pagination">
            {/* Previous button */}
            {currentPage > 1 && (
              <button className='move-btn' onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
            )}
            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                className={`page-btn ${currentPage === pageNumber ? 'active blue' : ''}`}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            ))}
            {/* Next button */}
            {currentPage < totalPages && (
              <button className='move-btn' onClick={() => handlePageChange(currentPage + 1)}>Next</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Transactions;
