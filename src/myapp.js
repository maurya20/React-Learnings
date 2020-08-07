import React from 'react';
import ReactDOM from 'react-dom';
class Mukesh extends React.Component{
  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
      width:"30%",
      borderRadius:"30px",
      margin:"60px"
    };
    return (
      <div><h1 style={{color:"red"}}>This is React!!!!</h1>
      <div style={mystyle}>
        <h1>My Details</h1>
        <h4>Name: Mukesh Maurya</h4>
        <h4>Email: mukesh.ice17@gmail.com</h4>
        <h4>Mobile No.: 9540339805</h4>
        <h4>College: GCET, Greater Noida</h4>
      </div>
      </div>
    );
  }
}

ReactDOM.render(<Mukesh />, document.getElementById('root'));


export default Mukesh;