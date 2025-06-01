import React from 'react'
import { LuArrowBigRightDash } from 'react-icons/lu'
import TransactionInfoCard from '../Cards/TransactionInfoCard'
import moment from 'moment'

const RecentIncome = ({transactions,onSeeMore}) => {
//console.log("recent income---???",trasactions.amount)

    return (
    <div className='card'>
<div className='flex items-center justify-between'>
<h5 className='text-lg'>Income</h5>    


<button className='bg-blue-500 text-white px-4 py-2 rounded-md mt-4' onClick={onSeeMore}>
  See All <LuArrowBigRightDash className='text-base' />
</button>  

    </div>
<div className='mt-6'>


   {transactions?.slice(0, 5)?.map((item) => (
  <TransactionInfoCard
    key={item._id}
    title={item.source}
    icon={item.icon}
    date={moment(item.date).format("Do MMM YYYY")}
    amount={item.amount}
    type="Income"
    hideDeleteBtn
  />
))}
</div>
    </div>

    
  )
}

export default RecentIncome