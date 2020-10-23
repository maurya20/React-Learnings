import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {createStore} from "redux"
import allReducers from "./reducers"
import App from './App'
import Home from './component/Home'



const myStore = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={myStore}>
       <App/>
       <Home/>
    </Provider>
    

, document.getElementById('root'))
