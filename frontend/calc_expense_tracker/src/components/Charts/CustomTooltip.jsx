import React from 'react'

const CustomTooltip = ({active,payload}) => {
    if(active && payload && payload.length){
    return (
    <div className='bg-white shad'>
        <p className='text-sm font-semibold'>{payload[0].name}</p>
        <p className='text-sm'>
            Amount:<span className='font-semibold'>${payload[0].value}</span>
        </p>
    </div>
  );
   
    }
   return null;
}

export default CustomTooltip