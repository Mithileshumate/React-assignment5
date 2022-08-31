import React, { useState } from 'react'

const HOC = () => {
  return (
    <div>
      <h1>Higher Order Component</h1>
      <p>1.The React Higher-Order Components is an advanced technique that takes a component and returns a new component.
        <br />
        2.It is used for reusing component logic.
         <br />
        At a high level HOC enables you to:
        <ul>
        <li>Code reuse, logic and bootstrap abstraction.</li> 
        <li>Render Highjacking.</li> 
        <li>State abstraction and manipulation.</li> 
        <li>Props manipulation.</li> 
        </ul>
        </p>
        <HOComponentred comp={Counter}/>
        <HOComponentgreen comp={Counter}/>
    </div>
  )
}
function HOComponentred(props){
  return <h2 className='red' style={{backgroundColor:'red',width:'150px'}}><props.comp/></h2>
}
function HOComponentgreen(props){
  return <h2 className='green' style={{backgroundColor:'green',width:'150px', ml:'200px' }}><props.comp/></h2>
}
function Counter(){
  const [count,setCount] = useState(0)
  return <div>
    <h3>{count}</h3>
    <button onClick={()=>setCount(count+2)}>Update</button>
  </div>
}

export default HOC