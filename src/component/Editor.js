import React from 'react'

const Editor = (props) => {

  let childCounterValue = props.counterValue;
  return (
    <div>
       <button onClick={() => props.callbackFunc(++childCounterValue)}>
       Increment Counter
     </button>
    </div>
  )
}

export default Editor
