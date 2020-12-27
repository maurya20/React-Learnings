import React, { useState,useEffect } from 'react';  
  


function CountApp() {  
  // Declare a new state variable, which we'll call "count"  
  const [count, setCount] = useState(0);  
  const [name, setName] = useState("Mukesh")
  const [todos, setTodos] = useState([{todo:'Learn Hooks'},{tick:"I am done"}])

  useEffect(()=>{
    document.title = `You clicked ${count} times`
  })
  console.log(todos[0])
  return (  
    <React.Fragment>  
      <h3>What to do?{todos[0]}</h3>
      <p>You clicked {count} times</p>  
      <button onClick={() => setCount(count + 1)}>  
        Click me  
      </button>  
  <h3>Your name is {name}</h3>
  <input type="text" placeholder="Type your name here..." onChange={(e) =>setName(e.target.value)}/>
  <br></br>
  <br></br>
    </React.Fragment>    
  );  
}  
export default CountApp;  