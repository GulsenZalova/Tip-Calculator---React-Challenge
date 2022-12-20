import React, { useState } from 'react'

function TipCalculator() {
 const [enteredInfo,setEnteredİnfo]=useState({bill:50,percentage:18,people:1})
 const changeİnfo=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setEnteredİnfo({
        ...enteredInfo,
        [name]:value
    })
 }

 const total=((enteredInfo.bill*enteredInfo.percentage)/100).toFixed(2)
 const tipPerPerson=(total/enteredInfo.people).toFixed(2)
 console.log(total)
//  console.log(enteredInfo.bill)
//  console.log(enteredInfo.percentage)
//  console.log(enteredInfo.people)
  return (
    <div>
      <div className='container'>
         <div className='calculator'>
            <label htmlFor="bill">Bill:</label>
            <input type="number" id='bill' name='bill' onChange={changeİnfo} value={enteredInfo.bill}  />
            <label htmlFor="percentage">Tip Percentage:</label>
            <input type="number" id='percentage'onChange={changeİnfo} name="percentage" value={enteredInfo.percentage} min="0" />
            <label htmlFor="people">Number of People:</label>
            <input type="number" id='people' name='people' value={enteredInfo.people} onChange={changeİnfo} min="1"/>
            <div className='result'>
            <p>Total Tip: <span>{total==0.00 ? "-" : `$${total}`}</span></p>
            <p>Tip Per Person: <span> {tipPerPerson==0.00 ? "-" : `$${tipPerPerson}`}</span></p>
            </div>
        </div>   
      </div>
    </div>
  )
}

export default TipCalculator
