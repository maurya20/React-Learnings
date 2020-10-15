import React from 'react'
import {buyCake} from "../redux/index"
import {connect} from 'react-redux'
import {useSelector, useDispatch} from 'react-redux'

function Home(props) {
    const numofCake = useSelector(state => state.numberOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
           <h2 style={{color:'red'}}>Number of Cakes={numofCake}</h2> 
           <button onClick={()=>dispatch(buyCake())}>Buy Cake</button> 
        </div>
    )
}

export default Home



