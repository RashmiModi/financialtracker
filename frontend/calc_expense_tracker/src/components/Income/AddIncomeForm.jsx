import React,{useState} from 'react'
import Input from '../Inputs/Input'
import EmojiPickerPopup from '../EmojiPickerPopup'
const AddIncomeForm = ({onAddIncome}) => {
 const [income, setIncome] = useState({
   source: '',
   amount: '',
   date: '',    
   icon: '',
    });

   const handleChange = (key, value) => {
  setIncome((prevIncome) => ({
    ...prevIncome,
    [key]: value || '',
  }));
};
    return (

<div>
<EmojiPickerPopup
    icon={income.icon}
    onSelect={(selectedIcon) => handleChange('icon', selectedIcon)} 
/>


 <Input
    value={income.source }
        onChange={({target}) => handleChange('source', target.value)}
        type="text"
        label="Income Source"
        placeholder="Freelance, Salary, Rent etc..."

/>
    <Input
    value={income.amount }
        onChange={({target}) => handleChange('amount', target.value)}
        type="number"
        label="Income Amount"
        placeholder="Enter income amount"

/>
<Input
    value={income.date }
        onChange={({target}) => handleChange('date', target.value)}
        type="date"
        label="Date"
        placeholder="Enter date"

/>
<div className='flex justify-end mt-6'>
<button
    onClick={() => onAddIncome(income)}
    className='add-btn add-btn-fill'      >
    
    Add Income
    
    </button>
   
</div>

</div>
  )
}

export default AddIncomeForm