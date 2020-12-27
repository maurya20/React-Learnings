import counterReducer from './counter'
import loggedReducer from  './islogged'
import formReducer from './formReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    formData: formReducer,
})

export default allReducers