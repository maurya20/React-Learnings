import React from "react"
import { useSelector } from "react-redux";



const App = ()=>{
    const isLogged = useSelector((state) => state.isLogged);
    return (
            <div style={{background:"yellow"}}>
                <h1>Hello Redux!!!!!!</h1>
                {isLogged ? <h3>LogIn</h3> : <h3>LogOut</h3>}
              
    

            </div>)
}

export default App