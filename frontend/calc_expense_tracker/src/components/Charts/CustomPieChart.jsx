import React from 'react'
import {PieChart,Pie,Cell,Tooltip,ResponsiveContainer,Legend} from 'recharts';
import CustomTooltip from './CustomTooltip';
import CustomLegend from './CustomLegend';
const CustomPieChart = ({data,label,totalAmount,colors,showTextAnchor}) => {
  return (
   <ResponsiveContainer width="100%" height={380}>
      <PieChart>
        <Pie
          data={data}
          dataKey="amount"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={130}
          innerRadius={100}
          labelLine={true}
         // fill="#8884d8"
        
        
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip content={CustomTooltip}/>
        <Legend color={CustomLegend}/>
     
      {showTextAnchor && (
        <>
         <text
          x="50%"
         y="50%"
         textAnchor="middle" 
        dy={-25}
         fontSize="14px"
         
         fill="#666">
          {label}
        </text>
        
        <text x="50%"
         y="50%"    
         dy={8}
         textAnchor="middle"
         fontSize="24px"
            fontWeight="semi-bold"
            fill='#333'>
          {totalAmount}
          </text>
         </>
       
      )}
      </PieChart>
    </ResponsiveContainer>
  )
}

export default CustomPieChart