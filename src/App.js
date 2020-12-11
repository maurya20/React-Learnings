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
  <table>
  <colgroup span="2" style={{backgroundColor:"yellow"}}/>
  <tr>
    <th>Col 1</th>
    <th>Col 2</th>
    <th>Col 3</th>
  </tr>
  <tr>
    <td>first</td>
    <td>second</td>
    <td>third</td>
  </tr>
</table>
    </div>
  );
}
export default App