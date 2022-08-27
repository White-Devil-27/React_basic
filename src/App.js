import './App.css';
import React from 'react'
import { useState, useEffect } from 'react';
import Counter from './Components/Counter';
import Navbar from './Components/Navbar';

function App() {

  const [value,setValue] = useState([
    {id: 1, value: 0}
  ])

  function Delete(id){
    setValue(value.filter(value => value.id !== id))
  }

  function handleReset(){
    setValue(value.map(item => ({...item,value : 0})))
  }

  return (
    <React.Fragment>
      <Navbar totalSelection = {value.filter(item => item.value> 0).length }/>
      <main className='container'>
        <button className=' mt-3 m-3 btn btn-success' onClick={handleReset}>Reset</button>
        {value.map((counter) =>{
          return <Counter 
                    key={counter.id} 
                    id = {counter.id} 
                    value = {counter.value} 
                    delete = {() => Delete(counter.id)}
                    increment = {() => Increment(counter)}
                    decrement = {() => Decrement(counter)}
                    addField = {AddField}>
            {/* <h4>Hii</h4> */}
          </Counter>
        })}
        
      </main>
    </React.Fragment>
  )

  function Increment(counter){
    const counters = [...value]
    const index  = counters.indexOf(counter)
    counters[index].value++
    setValue(counters)
  }
  function Decrement(counter){
    const counters = [...value]
    const index  = counters.indexOf(counter)
    if (counters[index].value > 0 )
      counters[index].value--
    setValue(counters)
  }
  function AddField(){
    setValue(value =>[...value,{id: 3, value : 0}])
  }
}

export default App;
