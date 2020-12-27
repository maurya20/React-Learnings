import React from 'react'
import {useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { formSubmit } from "../actions";




function Form() {

    const formData = useSelector((state) =>state.formData)
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [mob, setMob] = useState(0)


    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(formSubmit({name:name, age:age,mob:mob}))
    }
   
    return (
        <div>
            <h1>{formData.name}</h1>
            <h1>{formData.age}</h1>
            <h1>{formData.mob}</h1>
            <form onSubmit={handleSubmit}>
            <input placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
            <input placeholder="Enter Age" onChange={(e)=>setAge(e.target.value)}/>
            <input placeholder="Enter Mobile Number" onChange={(e)=>setMob(e.target.value)}/>
            <button type="submit" className="btn btn-primary btn-lg ">Submit</button>
            </form>
           
        </div>
    )
}

export default Form
