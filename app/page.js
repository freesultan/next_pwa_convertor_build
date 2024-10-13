 
 "use client"

 import React, {useState} from 'react';

 export default function Home() {


  const [amount, setAmount] =  useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);

  const convertCurrency = () => {
    const rate = 0.84; // Example conversion rate from USD to EUR
    const result = (amount * rate).toFixed(2);
    setConvertedAmount(result);
  };


  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
    <h1>Currency Converter</h1>
    <input
      type="number"
      placeholder="Amount in USD"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      style={{ padding: '10px', width: '200px' }}
    />
    <button onClick={convertCurrency} style={{ padding: '10px', marginLeft: '10px' }}>
      Convert to EUR
    </button>
    {convertedAmount !== null && (
      <h2>{`Converted Amount: €${convertedAmount}`}</h2>
    )}
  </div>
  );
}
