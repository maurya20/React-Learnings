import React, { useState } from 'react';  
  
function CountApp() {  
  // Declare a new state variable, which we'll call "count"  
  const [count, setCount] = useState(0);  
  const [name, setName] = useState("Mukesh"); 
  
  return (  
    <div>  
      <p>You clicked {count} times</p>  
      <button onClick={() => setCount(count + 1)}>  
        Click me  
      </button>  
  <h3>Your name is {name}</h3>
  <input type="text" placeholder="Type your name here..." onChange={(e) =>setName(e.target.value)}/>
  <br></br>
  <br></br>
    </div>  
  );  
}  
export default CountApp;  