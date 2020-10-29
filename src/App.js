import React from "react"
import { useSelector } from "react-redux";
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import MyEditor from './component/Editor'



const App = ()=>{
    const isLogged = useSelector((state) => state.isLogged);
    return (
            <div className="container">

                <h3> Welcome to my editor </h3>
                {/* <h1>Hello Redux!!!!!!</h1>
                {isLogged ? <h3>LogIn</h3> : <h3>LogOut</h3>} */}
              
    
              <Editor
//editorState={editorState}
  toolbarClassName="toolbarClassName"
  wrapperClassName="wrapperClassName"
  editorClassName="editorClassName"
//onEditorStateChange={this.onEditorStateChange}
/>
{/* <MyEditor/> */}
            </div>)
}

export default App