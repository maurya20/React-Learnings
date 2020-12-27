import React from 'react'
import {useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { formSubmit } from "../actions";




function Form() {

    const formData = useSelector((state) =>state.formData)
    const dispatch = useDispatch();
    const [input, setInput] = useState('')


    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(formSubmit(input))
    }
   
    return (
        <div>
            <h1>{formData.formData}</h1>
            <form onSubmit={handleSubmit}>
            <input placeholder="Enter Name" onChange={(e)=>setInput(e.target.value)}/>
            <button type="submit" className="btn btn-primary btn-lg ">Submit</button>
            </form>
           
        </div>
    )
}

export default Form
