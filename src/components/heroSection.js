import './heroSection.css'

const  HeroSection = ()=>{
    return(
        <div className="main-div">
            <div className='hero-sub-section'>
                <div className='wallet-div'>
                    <p className='wallet-subHeading'>Wallet Balance:<span className='money'> ₹4500</span></p>
                    <button className='wallet-btn'>+Add Income</button>
                </div>
                <div className='expenses-div'>
                    <p className='expenses-subHeading'>Expenses:<span className='E-money'> ₹500</span></p>
                    <button className='expenses-btn'>+Add Expense</button>
                </div>
            </div>
            <div className='chart-div'></div>
        </div>
    )
}

export default HeroSection;
