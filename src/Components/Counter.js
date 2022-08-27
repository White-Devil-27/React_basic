import React from 'react'
import { useState } from 'react';

export default function Counter(props){

    const{value, increment, decrement} = props
    const styles = {
        backgroundColor : value === 0 ? "#F5CA15" : "#245DF9",
        color : value === 0 ? "black" : "white"
    }
    return (
        <div className='container-fluid mt-2'>
          {/* <h1>{value}</h1> */}
          <span className="m-2 counter-badge " style={styles}>{Count()}</span>
          <button className='btn btn-secondary m-3' onClick={increment} >Increment</button>
          <button className='btn btn-secondary' onClick={decrement} >Decrement</button>
          <button className='btn btn-danger m-3' onClick={props.delete} >Delete</button>
          <button className='btn btn-primary m-3' onClick={props.addField} >Add</button>
        </div>
    )
    
    function Count(){
        return value === 0 ? "Zero" : value
    }
    
}