import './App.css';
import HeroSection from './components/heroSection';
import TopExpenses from './components/topExpenses';
import Transactions from './components/transactions';


function App() {
  return (
    <div className="App">
      <h1 className='heading'>Expense Tracker</h1>
      <HeroSection />
      <div className='bottom-section'>
        <Transactions />
        <TopExpenses />
      </div>
    </div>
  );
}

export default App;
