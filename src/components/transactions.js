import './transactions.css';
import { useState } from 'react';

const Transactions = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, item: 'Samosa', date: '2024-03-28', amount: 10, type: 'food' },
    { id: 2, item: 'Movie Ticket', date: '2024-03-27', amount: 150, type: 'entertainment' },
    { id: 3, item: 'Groceries', date: '2024-03-26', amount: 200, type: 'food' },
    { id: 4, item: 'Coffee', date: '2024-03-25', amount: 3.50, type: 'food' },
    { id: 5, item: 'Taxi', date: '2024-03-24', amount: 45, type: 'travel' },
    { id: 6, item: 'Restaurant', date: '2024-03-23', amount: 75, type: 'food' },
    { id: 7, item: 'Book', date: '2024-03-22', amount: 25, type: 'entertainment' },
    { id: 8, item: 'Gym Membership', date: '2024-03-21', amount: 50, type: 'entertainment' },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of items per page

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  const paginatedTransactions = transactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
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
                  <span className="item-name">{transaction.item}</span>
                  <div>
                  <span className="transaction-amount">₹{transaction.amount.toFixed(2)}</span>
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
                className={`page-btn ${currentPage === pageNumber ? 'active blue' : ''}`} // Added 'blue' class to active page
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
