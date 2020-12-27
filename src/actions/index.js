export const increment = (num)=> {
    return {
        type:'INCREMENT',
        payload:num
    }  
}

export const decrement = ()=> {
    return {
        type:'DECREMENT'
    }  
}
export const logAction = ()=> {
    return {
        type:'LOG_IN'
    }  
}

export const formSubmit = (data)=>{
    return{
        type:'SUBMIT_FORM',
        payload:data
    }
}