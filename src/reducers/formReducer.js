


const formData = {}
const formReducer = (state = formData, action)=>{
    switch(action.type){
        case 'SUBMIT_FORM':
        return action.payload
        
        default:
            return state
    }
}

export default formReducer