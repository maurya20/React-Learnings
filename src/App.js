import React from 'react'
import CakeContainer from './components/CakeContainer'
import {Provider} from  'react-redux'
import store from './redux/store'
import Home from './components/Home'

function App() {
    return (
        <Provider store={store}>
            <div className="container">
               <CakeContainer/>
               <Home/> 
            </div>
        </Provider>
        
    )
}

export default App
