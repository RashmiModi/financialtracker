import moment from "moment";
import CharAvatar from "../components/Cards/CharAvatar";

export const validateEmail=(email)=>{
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


export const getIntials=(name)=>{
    if(!name) return "";

    const words=name.split(" ");
    let initials="";

    for(let i=0;i<Math.min(words.length,2);i++){
        initials+=words[i][0];
    }

    return initials.toUpperCase();
}

export const addThousandsSeparator=(num)=>{
if(num==null|| isNaN(num)) return "";

const [integerPart, fractionalPart]=num.toString().split(".");
const formattedInteger=integerPart.replace(/\B(?=(\d{3})+(?!\d))/g,",")

return fractionalPart?
`${formattedInteger}.${fractionalPart}`:
formattedInteger;

}


export const prepaExpenseBarChartData = (data = []) => {
  console.log('Incoming data:', data);

  if (!Array.isArray(data)) {
    console.error('Expected an array but received:', typeof data);
    return [];
  }

  console.log('Data received for chart preparation:', data);

  const chartData = data.map(item => ({
    category: item?.category || 'Unknown',
    amount: item?.amount || 0,
  }));

  console.log('Processed chart data:', chartData);
  return chartData;
};

export const prepareIncomeBarChartData=(data=[])=>{
console.log("prepareIncomeBarChartData")

  const sortedData=[...data].sort((a,b)=>new Date(a.date)-new Date(b.date))
//console.log("amount :----",sortedData.amount)
  const chartData=sortedData.map((item)=>({
  month:moment(item?.date).format('Do MMM'), 
  amount:item?.amount,
  source:item?.source,
}));
return chartData;
}

export const prepareExpenseLineChartData=(data=[])=>{
const sortedData=[...data].sort((a,b)=>new Date(a.date)-new Date(b.date));
const chartData=sortedData.map((item)=>({
  date:moment(item?.date).format('Do MMM'),
  amount:item?.amount,
  category:item?.category,
    

}))
return chartData;
};
 


export default CharAvatar;