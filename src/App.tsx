import * as React from 'react'



// interface IApp  {
//   number1: number;
//   number2:number;
//   result: number;
// }

export const App: React.FunctionComponent = () => {
const [number1, setNumber1] = React.useState(0)
const [number2, setNumber2] = React.useState(0)
const [result, setResult] = React.useState(0)
 return (
   <div className="container">
     <h1> holla </h1>
     <input placeholder="First Number"/>
     <input placeholder="Second Number"/>
   <button>Add</button>
   <h3>Result is:</h3>
   </div>
 )
}

