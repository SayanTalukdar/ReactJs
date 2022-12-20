import { combineReducers } from 'redux'
import todoReducer from './Reducer'
import {todoStateReducer} from './Reducer'

export const rootReducer = combineReducers({
    id:todoReducer,
    todo:todoStateReducer,
})