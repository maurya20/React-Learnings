import React,{useState} from 'react'
import video from './assets/videos/CMDvideo.mp4'

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
      <details open>
  <summary> <strong>Parmesan Deviled Eggs</strong></summary>
  <p>
    These delectable little bites are made with organic eggs, fresh Parmesan, and chopped pine nuts.
  </p>
</details>
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

       <p>hello</p>
      <video src={video} width="450" height="300" controls>
     </video> 
    </div>
  );
}
export default App