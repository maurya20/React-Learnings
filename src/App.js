import React from "react"
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement,logAction} from './actions'


const App = ()=>{
const counter = useSelector(state=>state.counter)
const isLogged = useSelector( state=>state.isLogged)
const dispatch = useDispatch()
    return (
            <div>
                <h1>Hello Redux!!!!!!</h1>
               <h3>Counter: {counter.count}</h3>
<button onClick={()=>dispatch(increment(5))}>+</button>
<button onClick={()=>dispatch(decrement())}>-</button>
<button onClick={()=>dispatch(logAction())}>Log-Action</button>

               {isLogged? <h3>LogIn</h3>:<h3>LogOut</h3>}
    

            </div>)
}

export default App