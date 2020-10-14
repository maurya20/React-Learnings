import React from 'react'
import {buyCake} from "../redux/index"
import {connect} from 'react-redux'

function Home(props) {
    return (
        <div>
           <h2 style={{color:'red'}}>Number of Cakes={props.numberOfCakes}</h2> 
           <button onClick={props.buyCake}>Buy Cake</button> 
        </div>
    )
}
const mapStateToProps = state=>{
    return{
        numberOfCakes:state.numberOfCakes
    }
}
const mapDispatchToProps = dispatch=>{
    return{
      buyCake:()=> dispatch(buyCake())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)



