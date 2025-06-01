import React from 'react'
import CustomPieChart from '../../components/Charts/CustomPieChart';
const COLORS=["#875cf5","#fa2c37","ff6900"];
const FinanceOverview = ({totalBalance,totalIncome,totalExpense}) => {
  const balanceData = [
    { name: "Total Balance", amount: totalBalance, color: COLORS[0] },
    { name: "Total Income", amount: totalIncome, color: COLORS[1] },
    { name: "Total Expense", amount: totalExpense, color: COLORS[2] }       
  ];
  
  
    return (
        <div className='card'>
      <div className='flex items-center justify-between'>   
    <h5 className='text-lg'>Finance Overview</h5>
    </div>
    
<CustomPieChart 
data={balanceData}
colors={COLORS} 
totalAmount={`$${totalBalance}`}
label="Total Balance"
showTextAnchor 
/>

    </div>
  )
}

export default FinanceOverview