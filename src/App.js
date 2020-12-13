import Editor  from './component/Editor'
import React,{useState} from 'react'


const App = ()=> {
  const [fields, setFields] = useState([1])
  let [counter, setCounter] = useState(0);
  let callback = (data) => setCounter(data);

  const handleAdd = ()=> {
    const values = [...fields];
    values.push( 1 );
    setFields(values);
  }

  const handleRemove = (i)=> {
    const values = [...fields];
    values.splice(i);
    setFields(values);
  }

  return (
    <div className="container">
   <p>Value of counter: {counter}</p>
     <Editor callbackFunc={callback} counterValue={counter} />
 
      <h1>Enter Qualifications</h1>
      {fields.map(( item, i) => {
        return (
          <div key={i} style={{padding:5}}>
            <input
              type="text"
              placeholder="Enter......"
            />
            <button className="btn btn-danger" type="button" onClick={() => handleRemove(i)} style={{marginLeft:30}}>
            <span>❌</span>
            </button>
          </div>
        );
      })}
      <button className="btn btn-success"  type="button" onClick={() => handleAdd()}>
      <span>➕</span>
      </button> 

    </div>
  );
}
export default App