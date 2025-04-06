
import React, { useState } from 'react';

function RandomNumberGenerator()
{
  
  const [randomNumber,setRandomNumber] =useState(0);

  function generateRandomNumber() 
  {
    const newNumber = Math.floor(Math.random()*100)+1;
    setRandomNumber(newNumber);
  }
  
  return(
    <div style={{display:'flex', justifyContent:'center',alignItems:'center', height:'100vh',backgroundColor:'#f2f22'}}>
      <div style={{textAlign:'center',padding:'40px',margin:'40px',backgroundColor:'#fff',borderRadius:'10px',boxShadow:'0 40px 20px rgba(0,0,0,0.1'}}>
      <h1>Random Number:{randomNumber}</h1>
      <button onClick={generateRandomNumber} style={{padding:'10px 20px',fontSize:'16px',borderRadius:'5px',border:'none',cursor:'pointer',backgroundColor:'#007bff',color:'#fff'}}>Random</button>
      </div>
    </div>
  )


}

  
export default RandomNumberGenerator;