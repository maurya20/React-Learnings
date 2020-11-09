import React,{useState} from 'react'


const App = ()=> {
  const [fields, setFields] = useState([{ value:"hi" }])

  const handleAdd = (e)=> {
    const values = [...fields];
    values.push({ value: 1 });
    setFields(values);
  }

  const handleRemove = (i)=> {
    const values = [...fields];
    values.splice(i);
    setFields(values);
  }

  return (
    <div className="container">
      <h1>Enter Qualifications</h1>
      {fields.map(( item, i) => {
        return (
          <div key={i}>
            <input
              type="text"
              placeholder="Enter......"
            />
            <button className="btn btn-danger" type="button" onClick={() => handleRemove(i)} style={{marginLeft:30}}>
              X
            </button>
          </div>
        );
      })}
      <button className="btn btn-success"  type="button" onClick={() => handleAdd()}>
        +
      </button>  
    </div>
  );
}
export default App