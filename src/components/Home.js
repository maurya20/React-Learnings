import React from 'react'
import propTypes from 'prop-types'

const Home = (props) => {
    console.log(props.name)
    return (
        <div>
            Home
        </div>
    )
}
Home.propTypes ={
    name:propTypes.string,
    Mob:propTypes.number,
    dev:propTypes.bool,
}
export default Home
