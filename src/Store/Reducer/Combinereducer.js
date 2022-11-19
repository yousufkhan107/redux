import { combineReducers } from "redux";
import { counterReducer } from "./reducer";


const rootReducer = combineReducers({
    counterReducer: counterReducer
})

export default rootReducer;